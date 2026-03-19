// Shared project form data types used by Create, Edit, Duplicate, and Draft modes

export interface StepFormData {
  id: string;
  content: string;
  imageUrl?: string; // URL for existing images (from PDP data)
  image?: File | null; // File for newly uploaded images
}

export interface ShoppingItemFormData {
  id: string;
  name: string;
  quantity: string;
  link: string;
}

export interface ProjectFormData {
  projectTitle: string;
  description: string;
  selectedCategories: string[];
  experienceLevel: string;
  youtubeLink: string;
  coverImageUrl?: string; // URL for existing cover (from PDP data)
  steps: StepFormData[];
  shoppingItems: ShoppingItemFormData[];
}

export type ProjectFormMode = 'create' | 'edit' | 'duplicate' | 'draft';

// Mock PDP project data shape (mirrors ProjectDetailPage.tsx)
interface PDPInstruction {
  step: number;
  title: string;
  content: string;
  image?: string;
  imageCaption?: string;
}

interface PDPShoppingCategory {
  category: string;
  items: {
    name: string;
    quantity: number;
    price: number;
    link: string;
  }[];
}

interface PDPProject {
  title: string;
  category: string;
  difficulty: string;
  description: string;
  videoUrl?: string;
  image?: string;
  instructions: PDPInstruction[];
  shoppingList: PDPShoppingCategory[];
}

/**
 * Converts PDP project data into the form data shape used by CreateProjectPage.
 * Used for Edit and Duplicate flows.
 */
export function convertPDPToFormData(pdpProject: PDPProject, mode: 'edit' | 'duplicate'): ProjectFormData {
  const prefix = mode === 'duplicate' ? 'Copy of ' : '';

  return {
    projectTitle: `${prefix}${pdpProject.title}`,
    description: pdpProject.description,
    selectedCategories: [pdpProject.category],
    experienceLevel: pdpProject.difficulty,
    youtubeLink: pdpProject.videoUrl || '',
    coverImageUrl: pdpProject.image,
    steps: pdpProject.instructions.map((instruction, idx) => ({
      id: `step-${idx + 1}`,
      content: instruction.title
        ? `${instruction.title}\n\n${instruction.content}`
        : instruction.content,
      imageUrl: instruction.image,
    })),
    shoppingItems: pdpProject.shoppingList.flatMap((category) =>
      category.items.map((item, idx) => ({
        id: `item-${category.category}-${idx}`,
        name: item.name,
        quantity: String(item.quantity),
        link: item.link === '#' ? '' : item.link,
      }))
    ),
  };
}

// -------------------------------------------------------------------
// The full mock PDP project (same data as ProjectDetailPage.tsx)
// Centralised here so Edit/Duplicate wrappers can reference it.
// -------------------------------------------------------------------
export const mockPDPProject: PDPProject = {
  title: 'Autonomous Robot Arm with Computer Vision',
  category: 'ROBOTICS',
  difficulty: 'ADVANCED',
  description:
    'Complete build guide for a 6-axis precision robot arm featuring computer vision, real-time object detection, and custom inverse kinematics solver.',
  videoUrl: 'https://www.actionsatisfaction.com/ARK.mp4',
  image:
    'https://images.unsplash.com/photo-1570155308259-f4480a5c3696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGVsZWN0cm9uaWNzJTIwY2lyY3VpdHxlbnwxfHx8fDE3NzI0NDI2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  instructions: [
    {
      step: 1,
      title: 'Gather Materials and Tools',
      content:
        "Before starting, ensure you have all the necessary components. You'll need servo motors (6x MG996R), an Arduino Mega, a Raspberry Pi 4, and the custom PCB. Additionally, gather your tools: soldering iron, wire strippers, and a multimeter for testing connections.",
    },
    {
      step: 2,
      title: 'Assemble the Base Structure',
      content:
        'Start by assembling the aluminum frame base. Use the M5 bolts and T-nuts to secure the corner brackets. Make sure everything is square and level before tightening. The base needs to be sturdy as it will support the entire arm assembly.',
      image:
        'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGFzc2VtYmx5JTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MjcyMDU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      step: 3,
      title: 'Install Servo Motors',
      content:
        'Mount each servo motor in its designated position according to the assembly diagram. Pay careful attention to the orientation of each servo. Use the included servo horns and ensure they are aligned at the zero position before securing.',
    },
    {
      step: 4,
      title: 'Wire the Electronics',
      content:
        'Follow the wiring diagram carefully. Connect each servo to the corresponding PWM output on the Arduino. Power the servos through the external 6V power supply, NOT through the Arduino. Double-check all connections before applying power.',
      image:
        'https://images.unsplash.com/photo-1473831818960-c89731aabc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2byUyMG1vdG9yJTIwd2lyaW5nJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzcyNzIwNTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      step: 5,
      title: 'Install the Camera Module',
      content:
        "Mount the Raspberry Pi Camera Module 2 to the custom 3D-printed mount at the end effector. Connect it to the Raspberry Pi using the ribbon cable. Make sure the cable is secured and won't interfere with the arm's movement.",
      image:
        'https://images.unsplash.com/photo-1629739884912-92f6255f1920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBwaSUyMGNhbWVyYSUyMG1vZHVsZXxlbnwxfHx8fDE3NzI3MjA1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      step: 6,
      title: 'Upload the Control Software',
      content:
        'Clone the GitHub repository and upload the Arduino sketch for servo control. Then SSH into the Raspberry Pi and install the Python dependencies for computer vision. Configure the inverse kinematics parameters for your specific build.',
    },
    {
      step: 7,
      title: 'Calibration and Testing',
      content:
        'Run the calibration routine to set the servo limits and zero positions. Test each axis individually before attempting combined movements. Use the test script to verify the camera is detecting objects correctly. Fine-tune the PID parameters for smooth motion.',
    },
  ],
  shoppingList: [
    {
      category: 'Motors & Actuators',
      items: [
        { name: 'MG996R High Torque Servo Motor', quantity: 6, price: 12.99, link: '#' },
        { name: 'SG90 Micro Servo (for gripper)', quantity: 2, price: 3.99, link: '#' },
      ],
    },
    {
      category: 'Electronics',
      items: [
        { name: 'Arduino Mega 2560', quantity: 1, price: 38.99, link: '#' },
        { name: 'Raspberry Pi 4 (4GB)', quantity: 1, price: 55.0, link: '#' },
        { name: 'Raspberry Pi Camera Module 2', quantity: 1, price: 29.99, link: '#' },
        { name: 'Custom PCB (Gerber files included)', quantity: 1, price: 15.0, link: '#' },
        { name: '6V 5A Power Supply', quantity: 1, price: 14.99, link: '#' },
      ],
    },
    {
      category: 'Hardware & Structure',
      items: [
        { name: '2020 Aluminum Extrusion (500mm)', quantity: 4, price: 8.99, link: '#' },
        { name: 'M5 T-Nuts and Bolts Kit', quantity: 1, price: 12.99, link: '#' },
        { name: 'Ball Bearings (608ZZ)', quantity: 6, price: 1.99, link: '#' },
        { name: '3D Printed Parts (STL files included)', quantity: 1, price: 0, link: '#' },
      ],
    },
    {
      category: 'Cables & Connectors',
      items: [
        { name: 'Jumper Wire Kit', quantity: 1, price: 6.99, link: '#' },
        { name: 'Servo Extension Cables (30cm)', quantity: 6, price: 8.99, link: '#' },
        { name: 'USB-C Cable', quantity: 1, price: 7.99, link: '#' },
      ],
    },
  ],
};
