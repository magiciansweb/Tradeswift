"use client"
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

const Blogs = () => {
    const blogData = [
        {
          id: 1,
          image: 'https://i.postimg.cc/kgtHMnKz/image.png',
          title: 'The Future of E-Commerce: Trends and Innovations',
          time: '2024-01-17T12:30:00Z',
          description: 'Discover the latest trends and innovations shaping the future of e-commerce. From AI-driven personalization to blockchain in supply chain management, this blog post explores how businesses in the online trading and commerce space are adapting to the evolving digital landscape.',
        },
        {
          id: 2,
          image: 'https://i.postimg.cc/kMLKndCR/image.png',
          title: 'Strategies for Successful Cross-Border Trading',
          time: '2024-01-18T14:45:00Z',
          description: 'Going global? Learn effective strategies for navigating the challenges of cross-border trading. From understanding international trade regulations to optimizing logistics, this blog post provides valuable insights for businesses looking to expand their reach in the global marketplace.',
        },
        {
          id: 3,
          image: 'https://i.postimg.cc/13D3DLbT/image.png',
          title: 'The Role of Technology in Supply Chain Management',
          time: '2024-01-19T10:15:00Z',
          description: 'Explore the transformative impact of technology on supply chain management. This blog post discusses how technologies like IoT, RFID, and AI are revolutionizing supply chains, enhancing efficiency, and enabling businesses to streamline their operations.',
        },
        {
          id: 4,
          image: 'https://i.postimg.cc/4y7R192P/image.png',
          title: 'Building Trust in Online Transactions: Cybersecurity Tips',
          time: '2024-01-20T15:30:00Z',
          description: 'In the digital age, building trust is crucial for online businesses. Learn essential cybersecurity tips to protect your platform and customer data. From SSL encryption to two-factor authentication, this blog post provides actionable insights to secure online transactions and foster customer confidence.',
        },
        {
          id: 5,
          image: 'https://i.postimg.cc/RFf0Thsc/image.png',
          title: 'Optimizing User Experience for E-Commerce Success',
          time: '2024-01-21T12:00:00Z',
          description: 'User experience is a key factor in the success of any e-commerce platform. Explore practical tips and strategies for optimizing the user experience on your online trading platform. From responsive design to intuitive navigation, discover ways to enhance customer satisfaction and drive conversions.',
        },
        {
          id: 6,
          image: 'https://i.postimg.cc/cJPRHKtY/image.png',
          title: 'The Rise of Mobile Commerce: Trends and Insights',
          time: '2024-01-22T11:00:00Z',
          description: 'Mobile commerce continues to gain momentum. This blog post examines the latest trends and insights in the realm of mobile commerce. From mobile-friendly design to innovative payment solutions, discover how businesses can capitalize on the opportunities presented by the rise of mobile transactions.',
        },
        {
          id: 7,
          image: 'https://i.postimg.cc/bYk7qkSx/image.png',
          title: 'Effective Strategies for Digital Marketing in E-Commerce',
          time: '2024-01-23T14:00:00Z',
          description: 'Digital marketing is essential for driving traffic and sales in the competitive e-commerce landscape. Learn effective strategies for digital marketing tailored to online trading platforms. From SEO best practices to social media advertising, this blog post covers the tactics that can elevate your digital marketing game.',
        },
        {
          id: 8,
          image: 'https://i.postimg.cc/85hZgdXs/image.png',
          title: 'Understanding Cryptocurrency: Implications for Online Business',
          time: '2024-01-24T13:45:00Z',
          description: 'Cryptocurrency is reshaping the financial landscape. This blog post provides an in-depth understanding of cryptocurrency and its implications for online businesses. From accepting crypto payments to blockchain applications, explore how businesses can navigate the evolving landscape of digital currencies.',
        },
        {
          id: 9,
          image: 'https://i.postimg.cc/43PJQ390/image.png',
          title: 'Adapting to Change: Resilience in E-Commerce Businesses',
          time: '2024-01-25T16:30:00Z',
          description: 'In the ever-changing world of e-commerce, resilience is key to success. This blog post explores the importance of adaptability and resilience in e-commerce businesses. Learn from real-world examples and discover strategies to navigate challenges and thrive in a dynamic market environment.',
        },
        {
          id: 10,
          image: 'https://i.postimg.cc/rFCzRD3W/image.png',
          title: 'The Impact of Artificial Intelligence on Online Retail',
          time: '2024-01-26T12:15:00Z',
          description: 'Artificial Intelligence is transforming the online retail landscape. This blog post delves into the impact of AI on online trading platforms. From personalized recommendations to chatbots, discover how AI technologies are revolutionizing customer experiences and operational efficiency in e-commerce.',
        },
        {
          id: 11,
          image: 'https://i.postimg.cc/QtQZYTpJ/image.png',
          title: 'Global Trade Agreements: Navigating the Regulatory Landscape',
          time: '2024-01-27T09:45:00Z',
          description: 'Navigating global trade agreements is crucial for businesses engaged in international commerce. This blog post provides insights into key trade agreements, tariff considerations, and regulatory compliance. Stay informed about the latest developments that can impact your cross-border trading activities.',
        },
        {
          id: 12,
          image: 'https://i.postimg.cc/MpV5Qmx5/image.png',
          title: 'Creating a Seamless Checkout Experience for Online Shoppers',
          time: '2024-01-28T14:00:00Z',
          description: 'The checkout experience plays a vital role in customer satisfaction and conversion rates. This blog post explores strategies for creating a seamless checkout process on your online trading platform. From one-click payments to transparent pricing, learn how to optimize the final steps of the customer journey.',
        },
        {
          id: 13,
          image: 'https://i.postimg.cc/kGN85fWR/image.png',
          title: 'Evaluating Supply Chain Risks: A Comprehensive Guide',
          time: '2024-01-29T11:30:00Z',
          description: 'Supply chain risks can have a significant impact on businesses. This blog post offers a comprehensive guide to evaluating and mitigating supply chain risks in the context of online trading platforms. Stay proactive in identifying potential disruptions and safeguard your supply chain resilience.',
        },
        {
          id: 14,
          image: 'https://i.postimg.cc/L6C53c46/image.png',
          title: 'Customer Retention Strategies for E-Commerce Success',
          time: '2024-01-30T15:15:00Z',
          description: 'Customer retention is a critical aspect of sustained e-commerce success. Explore effective strategies for retaining customers on your online trading platform. From loyalty programs to personalized communication, learn how to build lasting relationships and maximize customer lifetime value.',
        },
        {
          id: 15,
          image: 'https://i.postimg.cc/hGM5X1bw/image.png',
          title: 'Innovations in Payment Technologies: Shaping the Future of Transactions',
          time: '2024-01-31T12:00:00Z',
          description :'Payment technologies continue to evolve, influencing the way transactions occur online. This blog post examines the latest innovations in payment technologies and their impact on the future of online transactions. Stay informed about emerging trends and technologies that can shape your payment strategies.',
        }]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
                blogData.map(post=> 

<div key={post.id} className="card bg-base-100 shadow-xl">
  <figure><img className="w-full h-[250px]" src={post.image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{post.title}</h2><span className=" flex gap-2 items-center p-2 font-bold border"><FaCalendarAlt></FaCalendarAlt> Date and Time:{post.time}</span>
    <p>{post.description.slice(0,100)}.....</p>
    <div className="card-actions justify-end">
    <Link href={`/Blog/${post.id}`}>
        
          <button className="btn">Read More</button>
       
      </Link>
    </div>
  
</div>
                </div>)
            }
        </div>
    );
};

export default Blogs;