import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      image: "https://i.postimg.cc/kgtHMnKz/image.png",
      title: "Future E-Commerce Trends",
      tag:'Forex Trading',
      description:
        "Discover the latest trends and innovations shaping the future of e-commerce. From AI-driven personalization to blockchain in supply chain management, this blog post explores how businesses in the online trading and commerce space are adapting to the evolving digital landscape.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 2,
      image: "https://i.postimg.cc/kMLKndCR/image.png",
      title: "Cross-Border Trading Strategies",
      tag:'Bitcoin Trading',
      description:
        "Going global? Learn effective strategies for navigating the challenges of cross-border trading. From understanding international trade regulations to optimizing logistics, this blog post provides valuable insights for businesses looking to expand their reach in the global marketplace.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 3,
      image: "https://i.postimg.cc/13D3DLbT/image.png",
      title: "Tech in Supply Chain",
      tag:'Investment',
      description:
        "Explore the transformative impact of technology on supply chain management. This blog post discusses how technologies like IoT, RFID, and AI are revolutionizing supply chains, enhancing efficiency, and enabling businesses to streamline their operations.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 4,
      image: "https://i.postimg.cc/4y7R192P/image.png",
      title: "Cybersecurity Tips",
      tag:'Trading Market',
      description:
        "In the digital age, building trust is crucial for online businesses. Learn essential cybersecurity tips to protect your platform and customer data. From SSL encryption to two-factor authentication, this blog post provides actionable insights to secure online transactions and foster customer confidence.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 5,
      image: "https://i.postimg.cc/RFf0Thsc/image.png",
      title: "Optimizing User Experience",
      tag:'Bitcoin Trading',
      description:
        "User experience is a key factor in the success of any e-commerce platform. Explore practical tips and strategies for optimizing the user experience on your online trading platform. From responsive design to intuitive navigation, discover ways to enhance customer satisfaction and drive conversions.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 6,
      image: "https://i.postimg.cc/cJPRHKtY/image.png",
      title: "The Rise of Mobile",
      tag:'Trading Market',
      description:
        "Mobile commerce continues to gain momentum. This blog post examines the latest trends and insights in the realm of mobile commerce. From mobile-friendly design to innovative payment solutions, discover how businesses can capitalize on the opportunities presented by the rise of mobile transactions.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 7,
      image: "https://i.postimg.cc/bYk7qkSx/image.png",
      title: "Digital Marketing Strategies",
      tag:'Investment',
      description:
        "Digital marketing is essential for driving traffic and sales in the competitive e-commerce landscape. Learn effective strategies for digital marketing tailored to online trading platforms. From SEO best practices to social media advertising, this blog post covers the tactics that can elevate your digital marketing game.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 8,
      image: "https://i.postimg.cc/85hZgdXs/image.png",
      title: "Cryptocurrency Insights",
      tag:'Trading Market',
      description:
        "Cryptocurrency is reshaping the financial landscape. This blog post provides an in-depth understanding of cryptocurrency and its implications for online businesses. From accepting crypto payments to blockchain applications, explore how businesses can navigate the evolving landscape of digital currencies.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 9,
      image: "https://i.postimg.cc/43PJQ390/image.png",
      title: "E-Commerce Resilience",
      tag:'Bitcoin Trading',
      description:
        "In the ever-changing world of e-commerce, resilience is key to success. This blog post explores the importance of adaptability and resilience in e-commerce businesses. Learn from real-world examples and discover strategies to navigate challenges and thrive in a dynamic market environment.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 10,
      image: "https://i.postimg.cc/rFCzRD3W/image.png",
      title: "AI in Online Retail",
      tag:'Bitcoin Trading',
      description:
        "Artificial Intelligence is transforming the online retail landscape. This blog post delves into the impact of AI on online trading platforms. From personalized recommendations to chatbots, discover how AI technologies are revolutionizing customer experiences and operational efficiency in e-commerce.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 11,
      image: "https://i.postimg.cc/QtQZYTpJ/image.png",
      title: "Global Trade Agreements",
      tag:'Investment',
      description:
        "Navigating global trade agreements is crucial for businesses engaged in international commerce. This blog post provides insights into key trade agreements, tariff considerations, and regulatory compliance. Stay informed about the latest developments that can impact your cross-border trading activities.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 12,
      image: "https://i.postimg.cc/MpV5Qmx5/image.png",
      title: "Seamless Checkout Experience",
      tag:'Trading Market',
      description:
        "The checkout experience plays a vital role in customer satisfaction and conversion rates. This blog post explores strategies for creating a seamless checkout process on your online trading platform. From one-click payments to transparent pricing, learn how to optimize the final steps of the customer journey.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 13,
      image: "https://i.postimg.cc/kGN85fWR/image.png",
      title: "Supply Chain Risks",
      tag:'Investment',
      description:
        "Supply chain risks can have a significant impact on businesses. This blog post offers a comprehensive guide to evaluating and mitigating supply chain risks in the context of online trading platforms. Stay proactive in identifying potential disruptions and safeguard your supply chain resilience.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 14,
      image: "https://i.postimg.cc/L6C53c46/image.png",
      title: "Customer Retention Strategies",
      tag:'Forex Trading',
      description:
        "Customer retention is a critical aspect of sustained e-commerce success. Explore effective strategies for retaining customers on your online trading platform. From loyalty programs to personalized communication, learn how to build lasting relationships and maximize customer lifetime value.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
    {
      id: 15,
      image: "https://i.postimg.cc/hGM5X1bw/image.png",
      title:"Payment Tech Innovations",
        tag:'Bitcoin Trading',
      description:
        "Payment technologies continue to evolve, influencing the way transactions occur online. This blog post examines the latest innovations in payment technologies and their impact on the future of online transactions. Stay informed about emerging trends and technologies that can shape your payment strategies.",
        auhor:{
          name:'Senturk Yasar',
          image:'https://thetork.com/demos/html/bitrader/assets/images/blog/author/1.png',
          date:'Mar 25, 2024'
        }
    },
  ];
  return (
   <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {
      blogData.map(blog=><div className="bg-[#1B2D29] space-y-3 text-white p-5 rounded-md" key={blog.id}>
          <div className="w-full h-[190px] mb-3 rounded-md" style={{backgroundImage:`url('${blog.image}')`,backgroundSize:'cover'}}></div>
          <p className="bg-[#0c1513] text-sm font-semibold text-[#00d094] py-1 px-2 rounded inline">{blog.tag}</p>
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p className="text-[#97ABA9] text-justify">{blog.description.slice(0,130)}...</p>
          <div className="flex items-center gap-3">
              <Image className="rounded-full" src={blog?.auhor?.image} width={50} height={50} alt={blog?.auhor?.name} />
              <div>
                <h5 className="text-xl font-semibold">{blog?.auhor?.name}</h5>
                <p className="text-[#97ABA9]">{blog?.auhor?.date}</p>
              </div>
          </div>
      </div>)}
   </div>
  );
};

export default Blogs;
