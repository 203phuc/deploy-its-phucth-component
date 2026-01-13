import { Product } from '../types';

export const sampleProduct: Product = {
  id: '1',
  title: 'Premium T-Shirt',
  description:
    'High-quality cotton t-shirt for everyday wear. Made from 100% organic cotton with a comfortable fit.',
  price: 29.99,
  originalPrice: 39.99,
  isNew: true,
  isOnSale: true,
  salePercentage: 25,
  rating: 4.5,
  reviewCount: 24,
  peopleViewing: 12,
  colors: ['Black', 'White', 'Navy', 'Gray'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
    {
      id: '1',
      url: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/banner1_mfkrjx.png',
      alt: 'Premium T-Shirt Front',
    },
    {
      id: '2',
      url: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379462/banner2_afsx5i.png',
      alt: 'Premium T-Shirt Back',
    },
    {
      id: '3',
      url: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379461/banner3_z9eyfw.png',
      alt: 'Premium T-Shirt Side',
    },
    {
      id: '4',
      url: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766383908/prod_1_lc42xu.png',
      alt: 'Premium T-Shirt Detail',
    },
  ],
  specifications: {
    Material: '100% Organic Cotton',
    Fit: 'Regular Fit',
    Care: 'Machine Washable',
    Origin: 'Made in USA',
    Weight: '180 GSM',
    Season: 'All Season',
  },
  reviews: [
    {
      id: 'r1',
      rating: 5,
      comment: 'Very comfortable and fits perfectly! The quality is amazing.',
      author: 'Alex Johnson',
      date: '2023-05-15',
      avatar: 'https://picsum.photos/seed/alex/48/48.jpg',
    },
    {
      id: 'r2',
      rating: 4,
      comment: 'Good quality t-shirt, but runs a bit small. Size up for better fit.',
      author: 'Sarah Miller',
      date: '2023-05-10',
      avatar: 'https://picsum.photos/seed/sarah/48/48.jpg',
    },
    {
      id: 'r3',
      rating: 5,
      comment: 'Love the organic cotton! So soft and breathable.',
      author: 'Mike Chen',
      date: '2023-05-08',
      avatar: 'https://picsum.photos/seed/mike/48/48.jpg',
    },
    {
      id: 'r4',
      rating: 3,
      comment: 'Decent material but the stitching could be better.',
      author: 'Emily Davis',
      date: '2023-05-05',
      avatar: 'https://picsum.photos/seed/emily/48/48.jpg',
    },
    {
      id: 'r5',
      rating: 5,
      comment: 'Exceeded my expectations. Holds shape well after washing.',
      author: 'Daniel Roberts',
      date: '2023-05-02',
      avatar: 'https://picsum.photos/seed/daniel/48/48.jpg',
    },
    {
      id: 'r6',
      rating: 4,
      comment: 'Nice fabric and color, delivery was fast.',
      author: 'Laura Nguyen',
      date: '2023-04-28',
      avatar: 'https://picsum.photos/seed/laura/48/48.jpg',
    },
    {
      id: 'r7',
      rating: 2,
      comment: 'Not bad, but the fit was awkward on the shoulders.',
      author: 'Chris Walker',
      date: '2023-04-25',
      avatar: 'https://picsum.photos/seed/chris/48/48.jpg',
    },
    {
      id: 'r8',
      rating: 5,
      comment: 'Perfect everyday t-shirt. I bought two more after the first one.',
      author: 'Hannah Lee',
      date: '2023-04-20',
      avatar: 'https://picsum.photos/seed/hannah/48/48.jpg',
    },
  ],

  questions: [
    {
      id: 'q1',
      question: 'Is this true to size?',
      answer: 'Yes, it fits true to size. If you prefer a looser fit, you might want to size up.',
    },
    {
      id: 'q2',
      question: 'Is this machine washable?',
      answer:
        'Yes, this product is machine washable. We recommend washing in cold water and tumble dry on low.',
    },
    {
      id: 'q3',
      question: 'Does the color fade after washing?',
      answer: 'No, the color is fade-resistant. We use high-quality dyes that last through multiple washes.',
    },
  ],
};
