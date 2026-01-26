export interface Blog {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: 'Sustainable Living: 10 Simple Changes for a Greener Home',
    description:
      'Discover easy ways to make your home more environmentally friendly without breaking the bank. From energy-efficient appliances to eco-friendly cleaning products, these small changes can make a big impact on our planet.',
    date: '2024-01-15',
    image: 'https://picsum.photos/seed/sustainable-home/800/600.jpg',
    category: 'Sustainability',
  },
  {
    id: 2,
    title: 'Modern Minimalist Design: Creating Space and Serenity',
    description:
      'Learn how to embrace minimalism in your home decor. This guide explores the principles of minimalist design and provides practical tips for creating a calm, clutter-free living space that promotes peace and clarity.',
    date: '2024-01-12',
    image: 'https://picsum.photos/seed/minimalist-design/800/600.jpg',
    category: 'Interior Design',
  },
  {
    id: 3,
    title: 'The Art of Indoor Gardening: Tips for Urban Plant Parents',
    description:
      "Transform your urban apartment into a green oasis with our comprehensive guide to indoor gardening. From choosing the right plants to mastering watering schedules, we'll help you become a confident plant parent.",
    date: '2024-01-10',
    image: 'https://picsum.photos/seed/indoor-gardening/800/600.jpg',
    category: 'Lifestyle',
  },
  {
    id: 4,
    title: 'Smart Home Technology: Simplifying Your Daily Routine',
    description:
      'Explore the latest smart home innovations that can streamline your daily life. From voice-activated lighting to automated climate control, discover how technology can make your home more efficient and comfortable.',
    date: '2024-01-08',
    image: 'https://picsum.photos/seed/smart-home/800/600.jpg',
    category: 'Technology',
  },
  {
    id: 5,
    title: 'Color Psychology: How Paint Choices Affect Your Mood',
    description:
      'Dive into the fascinating world of color psychology and learn how different paint colors can influence your emotions and behavior in each room of your home. Expert tips for choosing the perfect palette.',
    date: '2024-01-05',
    image: 'https://picsum.photos/seed/color-psychology/800/600.jpg',
    category: 'Design',
  },
  {
    id: 6,
    title: 'Organizing Small Spaces: Maximizing Every Square Foot',
    description:
      'Creative solutions for organizing and maximizing small living spaces. Learn clever storage hacks, furniture arrangements, and decluttering strategies that will make your small home feel spacious and functional.',
    date: '2024-01-03',
    image: 'https://picsum.photos/seed/small-spaces/800/600.jpg',
    category: 'Organization',
  },
  {
    id: 7,
    title: 'DIY Home Renovation: Budget-Friendly Upgrades That Transform',
    description:
      'Transform your living space with these budget-friendly DIY renovation projects. From painting techniques to simple carpentry, learn how to make a big impact without spending a fortune on professional services.',
    date: '2024-01-01',
    image: 'https://picsum.photos/seed/diy-renovation/800/600.jpg',
    category: 'DIY',
  },
  {
    id: 8,
    title: "Kitchen Trends 2024: What's Hot in Modern Cooking Spaces",
    description:
      'Explore the latest kitchen design trends for 2024. From smart appliances to sustainable materials, discover how to create a functional and stylish cooking space that reflects your personal taste and lifestyle.',
    date: '2023-12-28',
    image: 'https://picsum.photos/seed/kitchen-trends/800/600.jpg',
    category: 'Kitchen',
  },
  {
    id: 9,
    title: 'Creating a Productive Home Office: Design Tips for Remote Workers',
    description:
      'Set up an efficient and inspiring home office space with our expert design tips. Learn about ergonomics, lighting, storage solutions, and decor ideas that will boost your productivity and work-life balance.',
    date: '2023-12-25',
    image: 'https://picsum.photos/seed/home-office/800/600.jpg',
    category: 'Work From Home',
  },
  {
    id: 10,
    title: 'Natural Light Optimization: Brightening Dark Spaces',
    description:
      'Discover techniques for maximizing natural light in your home. From strategic mirror placement to window treatments, learn how to transform dark rooms into bright, airy spaces that lift your mood and energy.',
    date: '2023-12-22',
    image: 'https://picsum.photos/seed/natural-light/800/600.jpg',
    category: 'Lighting',
  },
  {
    id: 11,
    title: 'Vintage Decor: Incorporating Antique Pieces into Modern Homes',
    description:
      'Learn how to blend vintage and antique pieces with contemporary decor for a unique, personalized look. Discover tips for sourcing, restoring, and styling vintage items in your modern home.',
    date: '2023-12-20',
    image: 'https://picsum.photos/seed/vintage-decor/800/600.jpg',
    category: 'Vintage',
  },
  {
    id: 12,
    title: 'Pet-Friendly Home Design: Creating Spaces for Your Furry Friends',
    description:
      'Design a beautiful home that accommodates your pets without sacrificing style. Learn about durable materials, pet-friendly furniture, and creative solutions for keeping your space clean and organized.',
    date: '2023-12-18',
    image: 'https://picsum.photos/seed/pet-friendly/800/600.jpg',
    category: 'Pets',
  },
  {
    id: 13,
    title: 'Energy Efficiency: Lowering Your Utility Bills with Smart Choices',
    description:
      'Reduce your carbon footprint and save money with these energy-efficient home improvements. From insulation upgrades to smart thermostats, discover practical ways to make your home more sustainable.',
    date: '2023-12-15',
    image: 'https://picsum.photos/seed/energy-efficiency/800/600.jpg',
    category: 'Sustainability',
  },
  {
    id: 14,
    title: 'Outdoor Living Spaces: Extending Your Home to the Garden',
    description:
      'Transform your outdoor area into a functional living space with these design ideas. From cozy patios to outdoor kitchens, learn how to create a seamless transition between indoor and outdoor living.',
    date: '2023-12-12',
    image: 'https://picsum.photos/seed/outdoor-living/800/600.jpg',
    category: 'Outdoor',
  },
  {
    id: 15,
    title: 'Textile Trends: Fabrics and Patterns That Define Modern Interiors',
    description:
      'Explore the latest trends in home textiles and fabrics. From bold patterns to sustainable materials, discover how to use textiles to add personality and comfort to your living spaces.',
    date: '2023-12-10',
    image: 'https://picsum.photos/seed/textile-trends/800/600.jpg',
    category: 'Textiles',
  },
  {
    id: 16,
    title: 'Home Security: Modern Solutions for Peace of Mind',
    description:
      'Protect your home and family with the latest security technology. From smart locks to surveillance systems, learn about comprehensive security solutions that provide safety without compromising aesthetics.',
    date: '2023-12-08',
    image: 'https://picsum.photos/seed/home-security/800/600.jpg',
    category: 'Security',
  },
  {
    id: 17,
    title: 'Minimalist Storage: Clever Solutions for Clutter-Free Living',
    description:
      'Master the art of minimalist storage with these innovative solutions. Learn how to hide clutter, maximize space, and maintain a clean, organized home using smart storage techniques.',
    date: '2023-12-05',
    image: 'https://picsum.photos/seed/minimalist-storage/800/600.jpg',
    category: 'Organization',
  },
  {
    id: 18,
    title: 'Nature-Inspired Design: Bringing the Outdoors Indoors',
    description:
      'Discover the principles of nature-inspired design and how to incorporate natural elements into your home. From living walls to natural materials, learn how to create spaces that connect you with nature.',
    date: '2023-12-03',
    image: 'https://picsum.photos/seed/nature-inspired-design/800/600.jpg',
    category: 'Nature',
  },
  {
    id: 19,
    title: 'Lighting Design: Layering Techniques for Perfect Ambiance',
    description:
      'Master the art of lighting design with professional techniques for layering different light sources. Learn how to create ambiance, highlight architectural features, and improve functionality in every room.',
    date: '2023-12-01',
    image: 'https://picsum.photos/seed/lighting-design/800/600.jpg',
    category: 'Lighting',
  },
  {
    id: 20,
    title: 'Sustainable Materials: Eco-Friendly Choices for Home Renovation',
    description:
      "Explore sustainable and eco-friendly materials for your next home renovation project. From reclaimed wood to recycled materials, discover green alternatives that don't compromise on style or durability.",
    date: '2023-11-28',
    image: 'https://picsum.photos/seed/sustainable-materials/800/600.jpg',
    category: 'Sustainability',
  },
  {
    id: 21,
    title: 'Small Bathroom Design: Making the Most of Limited Space',
    description:
      'Transform your small bathroom into a functional and stylish space with these clever design solutions. Learn about space-saving fixtures, optical illusions, and storage hacks for compact bathrooms.',
    date: '2023-11-25',
    image: 'https://picsum.photos/seed/small-bathroom/800/600.jpg',
    category: 'Bathroom',
  },
  {
    id: 22,
    title: 'Home Automation: Integrating Technology Seamlessly',
    description:
      'Create a truly smart home with integrated automation systems. Learn how to connect different devices, create routines, and automate daily tasks for a more convenient and efficient living experience.',
    date: '2023-11-22',
    image: 'https://picsum.photos/seed/home-automation/800/600.jpg',
    category: 'Technology',
  },
  {
    id: 23,
    title: 'Scandinavian Design: Embracing Coziness and Simplicity',
    description:
      'Discover the cozy and functional principles of Scandinavian design. Learn how to incorporate cozy living concepts, natural materials, and minimalist aesthetics to create a warm and inviting home environment.',
    date: '2023-11-20',
    image: 'https://picsum.photos/seed/scandinavian-design/800/600.jpg',
    category: 'Interior Design',
  },
  {
    id: 24,
    title: 'Home Gym Ideas: Creating a Fitness Space at Home',
    description:
      'Design a functional and motivating home gym with these practical tips. From equipment selection to flooring options, learn how to create a dedicated fitness space that fits your lifestyle and budget.',
    date: '2023-11-18',
    image: 'https://picsum.photos/seed/home-gym/800/600.jpg',
    category: 'Fitness',
  },
  {
    id: 25,
    title: 'Window Treatments: Stylish Solutions for Privacy and Light Control',
    description:
      'Explore modern window treatment options that balance style and functionality. From smart blinds to elegant curtains, discover solutions for privacy, light control, and energy efficiency.',
    date: '2023-11-15',
    image: 'https://picsum.photos/seed/window-treatments/800/600.jpg',
    category: 'Window Treatments',
  },
];
