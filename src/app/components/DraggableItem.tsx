import { useRef, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DotsSixVertical } from '@phosphor-icons/react';
import { motion } from 'motion/react';

interface DraggableItemProps {
  id: string;
  index: number;
  type: string;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  children: React.ReactNode;
}

interface DragItem {
  id: string;
  index: number;
  type: string;
}

export function DraggableItem({ id, index, type, moveItem, children }: DraggableItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [{ isOver, canDrop }, drop] = useDrop<DragItem, void, { isOver: boolean; canDrop: boolean }>({
    accept: type,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    hover(item, monitor) {
      if (!containerRef.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = containerRef.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag<DragItem, void, { isDragging: boolean }>({
    type,
    item: () => ({ id, index, type }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Combine drop + preview onto the container via callback ref
  const setContainerRef = useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node;
      preview(drop(node));
    },
    [drop, preview]
  );

  return (
    <motion.div
      ref={setContainerRef}
      layout
      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      style={{
        opacity: isDragging ? 0.35 : 1,
      }}
      className={`relative rounded-[2px] transition-shadow ${
        isDragging ? 'z-50 shadow-lg' : 'z-0'
      } ${
        isOver && canDrop && !isDragging
          ? 'ring-2 ring-[#1782FF] ring-offset-2 ring-offset-background'
          : ''
      }`}
    >
      <div className="flex gap-0">
        <div
          ref={(node) => { drag(node); }}
          className="flex items-center justify-center px-2 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-[#1782FF] transition-colors flex-shrink-0 self-stretch touch-none select-none rounded-l-[2px] hover:bg-[#1782FF]/5"
          style={{ WebkitUserSelect: 'none' }}
          title="Drag to reorder"
        >
          <DotsSixVertical size={20} weight="bold" />
        </div>
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
