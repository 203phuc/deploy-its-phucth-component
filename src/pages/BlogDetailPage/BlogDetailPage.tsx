import { Badge } from '@components/Atom/Badge/Badge';
import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import ImagePlaceholder from '@components/Atom/ImagePlaceholder/ImagePlaceholder';
import { Input } from '@components/Atom/Input/Input';
import { Link } from '@components/Atom/Link/Link';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../util/mediaQueries';

export interface Blog {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  content: string;
  author: string;
  readTime: string;
  tags: string[];
  commentCount: number;
  viewCount: number;
  authorQuote: string;
}

// Mock blog data with full content
const mockBlogs: Blog[] = [
  {
    id: 1,
    title: 'Sustainable Living: 10 Simple Changes for a Greener Home',
    description:
      'Discover easy ways to make your home more environmentally friendly without breaking the bank. From energy-efficient appliances to eco-friendly cleaning products, these small changes can make a big impact on our planet.',
    date: '2024-01-15',
    image: 'https://picsum.photos/seed/sustainable-living/800/400.jpg',
    category: 'Lifestyle',
    author: 'Sarah Johnson',
    readTime: '5 min read',
    tags: [
      'Sustainability',
      'Home',
      'Eco-Friendly',
      'Green Living',
      'Environment',
      'Minimalism',
      'Lifestyle',
    ],
    commentCount: 24,
    viewCount: 1250,
    authorQuote: 'Small changes today create a sustainable tomorrow.',
    content: `
      <h2>Introduction</h2>
      <p>Sustainable living doesn't have to be complicated or expensive. In fact, making small, conscious choices in your daily life can lead to significant environmental benefits over time. This guide will walk you through ten simple changes you can implement in your home to reduce your carbon footprint and contribute to a healthier planet.</p>

      <h2>1. Switch to LED Bulbs</h2>
      <p>LED bulbs use up to 75% less energy than traditional incandescent bulbs and last up to 25 times longer. While they may cost more upfront, the long-term savings on your electricity bill make them a worthwhile investment.</p>

      <h2>2. Reduce Water Usage</h2>
      <p>Install low-flow shower heads and faucets to reduce water consumption without sacrificing water pressure. Fix leaky faucets promptly and consider collecting rainwater for your plants.</p>

      <h2>3. Choose Eco-Friendly Cleaning Products</h2>
      <p>Many conventional cleaning products contain harsh chemicals that can harm the environment. Opt for biodegradable, plant-based cleaners or make your own using simple ingredients like vinegar, baking soda, and lemon juice.</p>

      <h2>4. Start Composting</h2>
      <p>Food waste makes up a significant portion of household trash. By composting organic waste, you can reduce landfill contributions while creating nutrient-rich soil for your garden.</p>

      <h2>5. Use Reusable Bags</h2>
      <p>Keep reusable shopping bags in your car or by the door to avoid using plastic bags. This simple change can prevent hundreds of plastic bags from ending up in landfills each year.</p>

      <h2>6. Buy Local and Seasonal</h2>
      <p>Purchasing locally grown, seasonal produce reduces the carbon footprint associated with transportation and supports local farmers. Visit farmers' markets or join a community-supported agriculture (CSA) program.</p>

      <h2>7. Reduce Meat Consumption</h2>
      <p>The meat industry has a significant environmental impact. Try incorporating more plant-based meals into your diet, even if it's just one or two days a week.</p>

      <h2>8. Choose Energy-Efficient Appliances</h2>
      <p>When it's time to replace appliances, look for ENERGY STAR certified models. These appliances use less energy and water, saving you money on utility bills.</p>

      <h2>9. Improve Home Insulation</h2>
      <p>Proper insulation helps maintain comfortable temperatures in your home, reducing the need for heating and cooling. Start with weather stripping doors and windows and consider adding insulation to your attic.</p>

      <h2>10. Create a Sustainable Garden</h2>
      <p>Plant native species that require less water and maintenance. Use mulch to retain moisture and consider installing a drip irrigation system to water plants efficiently.</p>

      <h2>Conclusion</h2>
      <p>Creating a sustainable home is a journey, not a destination. Start with small changes that work for your lifestyle and gradually incorporate more sustainable practices. Remember that every effort counts, and together, we can make a significant difference for our planet.</p>

      <h2>Creating Your Minimalist Space</h2>

      <p>Start small—choose one room or even one corner to begin your minimalist journey. As you experience the benefits, you'll be motivated to expand the practice to other areas of your home.</p>

      <p>Remember that minimalism looks different for everyone. The goal isn't to create a sterile, empty space, but rather a home that supports your lifestyle and brings you peace.</p>
    `,
  },
  {
    id: 2,
    title: 'The Art of Minimalism: Less is More in Modern Living',
    description:
      'Explore how minimalism can transform your living space and mindset. Learn practical tips for decluttering, organizing, and creating a more intentional lifestyle focused on what truly matters.',
    date: '2024-01-14',
    image: 'https://picsum.photos/seed/minimalism/800/400.jpg',
    category: 'Lifestyle',
    author: 'Michael Chen',
    readTime: '7 min read',
    tags: [
      'Minimalism',
      'Organization',
      'Mindfulness',
      'Decluttering',
      'Simple Living',
      'Home Design',
      'Wellness',
    ],
    commentCount: 18,
    viewCount: 890,
    authorQuote: 'Simplicity is the ultimate sophistication.',
    content: `
      <h2>Understanding Minimalism</h2>
      <p>Minimalism is more than just having fewer possessions—it's a philosophy that focuses on intentional living and finding joy in simplicity. In our consumer-driven society, minimalism offers a refreshing alternative to the constant accumulation of stuff.</p>

      <h2>The Benefits of Minimalism</h2>
      <p>Adopting a minimalist lifestyle can lead to numerous benefits: reduced stress, increased focus, financial savings, and more time for what truly matters. When you own less, you worry less about maintenance, organization, and replacement.</p>

      <h2>Getting Started with Minimalism</h2>
      <p>Begin by evaluating your possessions and asking yourself what truly adds value to your life. Start with one area of your home and gradually expand your minimalist practices. Remember that minimalism is a personal journey, and there's no one-size-fits-all approach.</p>

      <h2>Minimalist Home Design</h2>
      <p>A minimalist home focuses on functionality, clean lines, and intentional spaces. Choose quality over quantity, invest in versatile pieces, and create areas that serve specific purposes. Use neutral colors and natural materials to create a calming environment.</p>

      <h2>Digital Minimalism</h2>
      <p>Minimalism extends beyond physical possessions to our digital lives. Unsubscribe from unnecessary emails, organize your files, and be mindful of your screen time. Digital clutter can be just as overwhelming as physical clutter.</p>

      <h2>Minimalist Mindset</h2>
      <p>True minimalism is about mindset, not just possessions. It's about being intentional with your time, energy, and resources. Focus on experiences over things, relationships over belongings, and quality over quantity.</p>

      <h2>Conclusion</h2>
      <p>Minimalism isn't about deprivation—it's about liberation. By removing the excess, you create space for what truly matters. Whether you're a minimalist enthusiast or just curious about simplifying your life, remember that every small step toward intentional living counts.</p>
# Modern Minimalist Design: Creating Space and Serenity

Minimalist design is more than just a trend—it's a philosophy that can transform your living space and your mindset. By embracing simplicity and intentionality, you can create a home that promotes peace, clarity, and well-being.

## What is Minimalist Design?

Minimalist design is characterized by simplicity, functionality, and the intentional use of space. It's about quality over quantity, focusing on what truly matters and eliminating the rest.

## Core Principles of Minimalist Design

### 1. Less is More

The fundamental principle of minimalism is that less can actually be more. Each item in your space should serve a purpose or bring you joy.

### 2. Quality Over Quantity

Invest in fewer, higher-quality pieces rather than filling your space with inexpensive items that won't last.

### 3. Intentional Placement

Every item should have a designated place and purpose. Random clutter disrupts the calm, orderly aesthetic of minimalist design.

## Practical Tips for Minimalist Living

### Start with Decluttering

Begin by removing everything that doesn't serve a purpose or bring you joy. Be ruthless in your evaluation—most people keep far more than they need.

### Choose a Neutral Color Palette

Stick to whites, grays, beiges, and other neutral tones as your base colors. This creates a sense of calm and cohesion.

### Invest in Multi-Functional Furniture

Choose pieces that serve multiple purposes, such as a storage ottoman or a dining table that can also work as a desk.

### Embrace Empty Space

Empty space (or "negative space") is a crucial element in minimalist design. Don't feel the need to fill every corner.

## Benefits of Minimalist Design

### Reduced Stress

A clutter-free environment can significantly reduce stress and anxiety. Your physical space often reflects your mental state.

### Easier Maintenance

Fewer items mean less cleaning and organizing. You'll spend less time maintaining your home and more time enjoying it.

### Financial Freedom

Minimalism often leads to more mindful spending, which can improve your financial health.

## Creating Your Minimalist Space

Start small—choose one room or even one corner to begin your minimalist journey. As you experience the benefits, you'll be motivated to expand the practice to other areas of your home.

Remember that minimalism looks different for everyone. The goal isn't to create a sterile, empty space, but rather a home that supports your lifestyle and brings you peace.
    `,
  },
  {
    id: 3,
    title: 'Digital Wellness: Finding Balance in a Connected World',
    description:
      'Learn practical strategies for managing screen time, reducing digital fatigue, and creating healthier relationships with technology. Discover how to use tech mindfully while staying connected.',
    date: '2024-01-13',
    image: 'https://picsum.photos/seed/digital-wellness/800/400.jpg',
    category: 'Technology',
    author: 'Emily Rodriguez',
    readTime: '6 min read',
    tags: [
      'Digital Wellness',
      'Technology',
      'Mindfulness',
      'Work-Life Balance',
      'Screen Time',
      'Mental Health',
      'Productivity',
    ],
    commentCount: 32,
    viewCount: 1567,
    authorQuote: 'Technology should serve us, not consume us.',
    content: `
      <h2>The Digital Dilemma</h2>
      <p>In our hyper-connected world, finding balance with technology has become one of the most important challenges of our time. While digital tools offer incredible benefits, they can also lead to burnout, anxiety, and a sense of being constantly "on."</p>

      <h2>Understanding Digital Wellness</h2>
      <p>Digital wellness is about intentionally using technology in ways that support your well-being rather than detract from it. It's not about eliminating technology, but about creating healthy boundaries and mindful habits around its use.</p>

      <h2>Signs You Need Digital Balance</h2>
      <p>Common signs include feeling anxious without your phone, constantly checking notifications, difficulty focusing on tasks, and feeling drained after extended screen time. Recognizing these patterns is the first step toward change.</p>

      <h2>Practical Strategies for Digital Balance</h2>
      <p>Start with small changes: set specific times for checking email, use app timers, create tech-free zones in your home, and practice single-tasking instead of constant multitasking.</p>

      <h2>The Power of Digital Detox</h2>
      <p>Regular digital detoxes—even short ones—can help reset your relationship with technology. Try a weekend without social media or a day without checking work emails after hours.</p>

      <h2>Building Healthy Tech Habits</h2>
      <p>Focus on being intentional with your technology use. Ask yourself: Does this app serve my goals? Is this screen time adding value to my life? Am I using technology or is it using me?</p>

      <h2>Conclusion</h2>
      <p>Finding digital balance is an ongoing process, not a one-time fix. Be patient with yourself as you develop new habits and remember that small, consistent changes lead to lasting improvements in your digital well-being.</p>
    `,
  },
];

// Related posts data
const relatedPosts = [
  {
    id: 1,
    title: '10 Tips for Sustainable Living',
    image: 'https://picsum.photos/seed/related1/400/200.jpg',
  },
  {
    id: 2,
    title: 'Minimalist Home Design Ideas',
    image: 'https://picsum.photos/seed/related2/400/200.jpg',
  },
  {
    id: 3,
    title: 'Eco-Friendly Product Guide',
    image: 'https://picsum.photos/seed/related3/400/200.jpg',
  },
];

// Mock comments data
const mockComments = [
  {
    id: 1,
    author: 'Sarah Johnson',
    date: '2 days ago',
    content:
      "This is such an insightful article! I've been trying to implement more sustainable practices in my daily life, and your tips are really helpful. The section on LED bulbs was particularly eye-opening.",
  },
  {
    id: 2,
    author: 'Michael Chen',
    date: '1 week ago',
    content:
      'Great read! I especially appreciate the practical approach you take. Sometimes sustainability can feel overwhelming, but breaking it down into small, manageable steps makes it much more accessible.',
  },
  {
    id: 3,
    author: 'Emily Rodriguez',
    date: '2 weeks ago',
    content:
      "Thank you for sharing this! I've already started composting and it's amazing how much waste we've reduced. Looking forward to trying more of your suggestions.",
  },
];

// Categories data
const categories = [
  { name: 'Lifestyle', count: 12 },
  { name: 'Technology', count: 8 },
  { name: 'Design', count: 6 },
  { name: 'Business', count: 15 },
  { name: 'Travel', count: 9 },
];

export interface BlogDetailPageProps {
  blogId?: number;
}

// Date formatting function
const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  const today = new Date();

  if (date.toDateString() === today.toDateString()) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `Today ${displayHours}:${displayMinutes} ${ampm}`;
  }

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Reusable components
const SectionTitle = ({ title }: { title: string }) => (
  <Flex direction="column">
    <Text size="large" color="black-900" weight="semiBold">
      {title}
    </Text>
    <Section mt={12} w="100%" bgColor="var(--color-black-900)" h={1}></Section>
  </Flex>
);

const CategoryItem = ({ name, count }: { name: string; count: number }) => (
  <Section pt={16}>
    <Flex justify="space-between" align="center">
      <Text size="medium" color="black-900" weight="semiBold">
        {name}
      </Text>
      <Text size="small" color="black-500" weight="regular">
        {count}
      </Text>
    </Flex>
    <Section mt={16} w="100%" bgColor="#EAEAEA" h={1}></Section>
  </Section>
);

const RelatedPostItem = ({ title, image }: { title: string; image: string }) => (
  <Flex align="center" direction="row" gap={8}>
    <Section w={100} h={57} overflow="hidden">
      <ImagePlaceholder
        src={image}
        alt={title}
        objectFit="cover"
        objectPosition="center"
        fallbackText="Post"
        size="full"
      />
    </Section>
    <Text size="small" color="black-900" weight="semiBold">
      {title}
    </Text>
  </Flex>
);

const BlogHeader = ({ blog, formatDateTime }: { blog: Blog; formatDateTime: (date: string) => string }) => (
  <Section w="100%">
    <Flex direction="column" gap={16}>
      {/* First Tag */}
      <Text size="large" color="black-900" weight="semiBold">
        {blog.tags[0].toUpperCase()}
      </Text>

      {/* Blog Title */}
      <Heading size="h3" color="black-900" weight="moderate" font="spaceGrotesk">
        {blog.title}
      </Heading>

      {/* Author and Metadata */}
      <Flex gap={16} align="center" wrap="wrap">
        <Flex align="center" gap={4}>
          <Icons iconName="UserIcon" color="blueText" iconSize={18} />
          <Text size="small" color="black-700" weight="regular">
            {blog.author}
          </Text>
        </Flex>
        <Flex align="center" gap={4}>
          <Icons color="blueText" iconName="ClockIcon" iconSize={18} />
          <Text size="small" weight="regular">
            {formatDateTime(blog.date)}
          </Text>
        </Flex>
        <Flex align="center" gap={4}>
          <Icons color="blueText" iconName="MessageIcon" iconSize={18} />
          <Text size="small" weight="regular">
            {blog.commentCount} Comments
          </Text>
        </Flex>
        <Flex align="center" gap={4}>
          <Icons color="blueText" iconName="ViewIcon" iconSize={18} />
          <Text size="small" weight="regular">
            {blog.viewCount} Views
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Section>
);

const BlogContent = ({ blog, isMobile }: { blog: Blog; isMobile: boolean }) => (
  <Section w={isMobile ? '100%' : 880}>
    <Flex direction="column" gap={40}>
      {/* Blog Image */}
      <Section w="100%" h={isMobile ? 300 : 640} overflow="hidden">
        <ImagePlaceholder
          src={blog.image}
          alt={blog.title}
          objectFit="cover"
          objectPosition="center"
          fallbackText="Blog"
          size="full"
        />
      </Section>

      {/* Author Quote */}
      <Section w="100%" px={isMobile ? 16 : 0} borderRadius={8}>
        <Text size="medium" color="black-700" weight="regular">
          &ldquo;{blog.authorQuote}&rdquo;
        </Text>
      </Section>

      {/* Blog Description */}
      <Text size="large" color="black-700" weight="regular">
        {blog.description}
      </Text>

      {/* Blog Content */}
      <Section w="100%">
        <Flex direction="column" gap={32}>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </Flex>
      </Section>
    </Flex>
  </Section>
);

const BlogSidebar = ({ isMobile, blog }: { isMobile: boolean; blog: Blog }) =>
  !isMobile && (
    <Section w={375}>
      <Flex direction="column" gap={53}>
        {/* Search Section */}
        <Section bgColor="#FAFAFB" w="100%" px={24} py={24}>
          <Flex direction="column" gap={16}>
            <SectionTitle title="Search" />
            <Input
              iconStart={<Icons iconName="SearchIcon" iconSize={20} />}
              type="text"
              placeholder="Search articles..."
              size="xlarge"
              variant="solid"
              bgColor="white"
            />
          </Flex>
        </Section>

        {/* Categories Section */}
        <Section bgColor="#FAFAFB" w="100%" px={24} py={24}>
          <Flex direction="column">
            <SectionTitle title="Categories" />
            <Flex direction="column">
              {categories.map((category) => (
                <CategoryItem key={category.name} name={category.name} count={category.count} />
              ))}
            </Flex>
          </Flex>
        </Section>

        {/* Newsletter Section */}
        <Section bgColor="#FFEAD8" w="100%" px={24} py={24}>
          <Flex direction="column" gap={16}>
            <SectionTitle title="Join Newsletter" />
            <Text size="medium" color="black-700" weight="regular">
              Subscribe to get the latest articles, news, and updates delivered directly to your inbox.
            </Text>
            <Input
              type="email"
              placeholder="Enter your email"
              size="medium"
              variant="solid"
              bgColor="white"
            />
            <Button
              font="spaceGrotesk"
              size="medium"
              roundness="round"
              variant="solidBlack"
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#000';
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = '#000';
              }}
            >
              Subscribe
            </Button>
          </Flex>
        </Section>

        {/* Related Posts Section */}
        <Section bgColor="#FAFAFB" w="100%" px={24} py={24}>
          <Flex direction="column" gap={16}>
            <SectionTitle title="Related Posts" />
            <Flex direction="column" gap={24}>
              {relatedPosts.map((post) => (
                <RelatedPostItem key={post.id} title={post.title} image={post.image} />
              ))}
            </Flex>
          </Flex>
        </Section>

        {/* Tags Section */}
        <Section bgColor="#FAFAFB" w="100%" px={24} py={24}>
          <Flex direction="column" gap={16}>
            <Flex direction="column">
              <Text size="large" color="black-900" weight="semiBold">
                Tags
              </Text>
              <Section mt={12} w="100%" bgColor="var(--color-black-900)" h={1}></Section>
            </Flex>
            <Flex direction="column" gap={12}>
              <Flex wrap="wrap" gap={12}>
                {blog.tags.map((tag, index) => (
                  <Badge key={index} size="small" color="gray" variant="outline" roundness="rounded">
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </Section>
  );

export const BlogDetailPage = ({ blogId = 1 }: BlogDetailPageProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsMobile);
    return cleanup;
  }, []);

  const blog = mockBlogs.find((b) => b.id === blogId) ?? mockBlogs[0];

  return (
    <Flex direction="column">
      <Section w="100%" px={isMobile ? 16 : 52} py={isMobile ? 40 : 80}>
        <Flex direction="column" gap={40}>
          {/* Blog Header */}
          <Section w="100%">
            <Flex direction="column" gap={16}>
              <BlogHeader blog={blog} formatDateTime={formatDateTime} />

              {/* Two Column Layout - Content and Sidebar */}
              <Flex direction="row" gap={81} align="start">
                {/* Left: Main Content */}
                <BlogContent blog={blog} isMobile={isMobile} />

                {/* Right Sidebar - Hidden on Mobile */}
                {!isMobile && BlogSidebar({ isMobile, blog })}
              </Flex>
              <Flex direction="column" gap={isMobile ? 32 : 56} width={isMobile ? '100%' : 1108}>
                <Section w="100%" pt={isMobile ? 24 : 36} px={isMobile ? 16 : 0}>
                  <Flex
                    width="100%"
                    justify="space-between"
                    direction={isMobile ? 'column' : 'row'}
                    gap={isMobile ? 16 : 0}
                  >
                    <Flex gap={16} align="center">
                      <Text size="medium" color="black-900" weight="semiBold">
                        Tags:
                      </Text>
                      <Text>Fashion, Summer, Trending, Featured</Text>
                    </Flex>
                    <Flex gap={16} align="center">
                      <Text weight="semiBold" color="black-900" size="medium">
                        Share:
                      </Text>
                      <Icons iconName="FacebookIcon" iconSize={24} />
                      <Icons iconName="InstagramIcon" iconSize={24} />
                      <Icons iconName="TwitterIcon" iconSize={24} />
                      <Icons iconName="EmailIcon" iconSize={24} />
                    </Flex>
                  </Flex>
                </Section>
                <Section w="100%">
                  <Flex
                    width="100%"
                    justify="space-between"
                    direction={isMobile ? 'column' : 'row'}
                    gap={isMobile ? 16 : 0}
                  >
                    <Flex direction="column" align="start" gap={16}>
                      <Button variant="text">
                        <Flex align="center" justify="start" gap={6}>
                          <Icons iconName="ArrowLeftIcon" iconSize={24} />
                          <Text font="spaceGrotesk" size="special2" color="black-900" weight="moderate">
                            Previous
                          </Text>
                        </Flex>
                      </Button>
                      <Flex gap={16}>
                        <Section w={isMobile ? '100%' : 255} h={60}>
                          <Text size="large" color="black-900" weight="semiBold">
                            This summer&apos;s greatest fashion trends
                          </Text>
                        </Section>
                      </Flex>
                    </Flex>
                    <Flex direction="column" gap={16} align="end">
                      <Button variant="text">
                        <Flex align="center" gap={6}>
                          <Text font="spaceGrotesk" size="special2" color="black-900" weight="moderate">
                            Next
                          </Text>
                          <Icons iconName="ArrowRightIcon" iconSize={24} />
                        </Flex>
                      </Button>
                      <Flex gap={16}>
                        <Section w={isMobile ? '100%' : 255} h={60}>
                          <Text align="right" size="large" color="black-900" weight="semiBold">
                            This summer&apos;s greatest fashion trends
                          </Text>
                        </Section>
                      </Flex>
                    </Flex>
                  </Flex>
                </Section>
                <Section w="100%" h={1} bgColor="#EAEAEA" />
                <Section w="100%">
                  <Flex direction="column" gap={32}>
                    <Heading size="h5" color="black-900" weight="moderate" font="spaceGrotesk">
                      You might also like...
                    </Heading>
                    <Flex
                      gap={isMobile ? 16 : 32}
                      justify={isMobile ? 'center' : 'space-between'}
                      direction={isMobile ? 'column' : 'row'}
                    >
                      {mockBlogs.slice(0, 3).map((relatedBlog) => (
                        <Link
                          key={relatedBlog.id}
                          href={`/blog/${relatedBlog.id}`}
                          hoverUnderline
                          underlineOffset="none"
                        >
                          <Section w={isMobile ? '100%' : 342} overflow="hidden" bgColor="white">
                            <Flex direction="column">
                              {/* Blog Image */}
                              <Section w="100%" h={200} overflow="hidden">
                                <ImagePlaceholder
                                  src={relatedBlog.image}
                                  alt={relatedBlog.title}
                                  objectFit="cover"
                                  objectPosition="center"
                                  fallbackText="Blog"
                                  size="full"
                                />
                              </Section>

                              {/* Blog Content */}
                              <Section pt={20} w="100%">
                                <Flex direction="column" gap={12}>
                                  {/* Date */}
                                  <Text size="smedium" color="black-500" weight="regular">
                                    {new Date(relatedBlog.date).toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                                    })}
                                  </Text>

                                  {/* Title */}
                                  <Text size="large" color="black-900" weight="semiBold" font="spaceGrotesk">
                                    {relatedBlog.title}
                                  </Text>

                                  {/* Read More Button */}
                                  <Section pt={8}>
                                    <Link
                                      href="#"
                                      font="spaceGrotesk"
                                      weight="moderate"
                                      underlineOffset="none"
                                      size="special1"
                                      color="black-900"
                                    >
                                      Read More <Icons iconName="ArrowRightIcon" />
                                    </Link>
                                  </Section>
                                </Flex>
                              </Section>
                            </Flex>
                          </Section>
                        </Link>
                      ))}
                    </Flex>
                  </Flex>
                </Section>
                <Section w="100%" h={1} bgColor="#EAEAEA" />
                <Section w="100%">
                  <form>
                    <Flex direction="column" gap={40}>
                      <Heading size="h5" color="black-900" weight="moderate" font="spaceGrotesk">
                        Post a Comment
                      </Heading>
                      <Flex direction="column" gap={32}>
                        <Input placeholder="Full Name" size="xlarge"></Input>
                        <Input as="textarea" rows={8} placeholder="Comment"></Input>
                      </Flex>
                    </Flex>
                    <Section pt={24}>
                      <Flex width="100%" justify="end">
                        <Button roundness="round">Submit</Button>
                      </Flex>
                    </Section>
                  </form>
                </Section>
                <Section w="100%">
                  <Flex direction="column" gap={32}>
                    <Flex justify="start">
                      <Heading size="h5" color="black-900" weight="moderate" font="spaceGrotesk">
                        {blog.commentCount} Comments
                      </Heading>
                    </Flex>
                    <Flex direction="column" gap={24}>
                      {mockComments.map((comment) => (
                        <Section key={comment.id} w="100%" px={24} pt={24} borderRadius={8}>
                          <Flex direction="column" gap={12}>
                            <Flex gap={12} align="center">
                              <Section w={60} h={60} borderRadius="50%" overflow="hidden">
                                <ImagePlaceholder size="full" src={blog.image} alt="image" />
                              </Section>
                              <Flex direction="column">
                                <Text size="medium" color="black-900" weight="semiBold">
                                  {comment.author}
                                </Text>
                                <Text size="small" color="black-500" weight="regular">
                                  {comment.date}
                                </Text>
                              </Flex>
                            </Flex>
                            <Text size="medium" color="black-700" weight="regular">
                              {comment.content}
                            </Text>
                            <Flex justify="start">
                              <Button variant="text" size="small">
                                <Flex align="center" gap={6}>
                                  <Icons iconName="MessageIcon" iconSize={20} />
                                  Reply
                                </Flex>
                              </Button>
                            </Flex>
                          </Flex>
                          <Section mt={30} h={1} w="100%" bgColor="#EAEAEA" />
                        </Section>
                      ))}
                    </Flex>
                  </Flex>
                </Section>
              </Flex>
            </Flex>
          </Section>
        </Flex>
      </Section>
    </Flex>
  );
};

export default BlogDetailPage;
