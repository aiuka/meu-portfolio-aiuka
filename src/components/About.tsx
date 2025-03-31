
import React from 'react';
import ServiceCard from './ServiceCard';
import TestimonialCard from './TestimonialCard';
import ClientLogo from './ClientLogo';

const services = [
  {
    icon: 'https://i.postimg.cc/4389jZkP/icon-design.png',
    title: 'Web Design',
    description: 'The most modern and high-quality design made at a professional level.'
  },
  {
    icon: 'https://i.postimg.cc/ZqgqrqzG/icon-dev.png',
    title: 'Web Development',
    description: 'High-quality development of sites at the professional level.'
  },
  {
    icon: 'https://i.postimg.cc/xjLdzYxZ/icon-app.png',
    title: 'Mobile Apps',
    description: 'Professional development of applications for iOS and Android.'
  },
  {
    icon: 'https://i.postimg.cc/0NL8zHpx/icon-photo.png',
    title: 'Photography',
    description: 'I make high-quality photos of any category at a professional level.'
  }
];

const testimonials = [
  {
    avatar: 'https://i.postimg.cc/zGDHfn3G/avatar-1.png',
    name: 'Daniel Lewis',
    text: 'Richard was hired to create a corporate identity. It\'s modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.'
  },
  {
    avatar: 'https://i.postimg.cc/DwY0yHtx/avatar-2.png',
    name: 'Jessica Miller',
    text: 'Working with Richard has been an absolute pleasure. I was impressed with his attention to detail, his web design skills and his professional approach to our timelines and processes.'
  },
  {
    avatar: 'https://i.postimg.cc/fRFWhX9F/avatar-3.png',
    name: 'Emily Evans',
    text: 'I couldn\'t be happier with the website that Richard created for us. His attention to detail and creativity is unmatched. Our clients frequently compliment the design, and it has significantly improved our brand image.'
  },
  {
    avatar: 'https://i.postimg.cc/zXv1Xv81/avatar-4.png',
    name: 'Henry Williams',
    text: 'I was overwhelmed with the thought of redesigning my online store, but Richard made the process seamless. The site is not only visually appealing but also optimized for conversions. I\'ve seen a 50% increase in traffic since the launch!'
  }
];

const clients = [
  { logo: 'https://i.postimg.cc/YqfKyG66/logo-1-color.png', alt: 'Client 1' },
  { logo: 'https://i.postimg.cc/fWm6JtgG/logo-2-color.png', alt: 'Client 2' },
  { logo: 'https://i.postimg.cc/Bb07xpwd/logo-3-color.png', alt: 'Client 3' },
  { logo: 'https://i.postimg.cc/hv1yMmkh/logo-4-color.png', alt: 'Client 4' },
  { logo: 'https://i.postimg.cc/ry1P86Dc/logo-5-color.png', alt: 'Client 5' },
  { logo: 'https://i.postimg.cc/SsWDN8NV/logo-6-color.png', alt: 'Client 6' }
];

const About = () => {
  return (
    <div className="space-y-12">
      <header>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">About Me</h2>
      </header>

      <section className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. 
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p className="text-gray-600 leading-relaxed">
          My job is to build your website so that it is functional and user-friendly but at the same time attractive. 
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. 
          My aim is to bring across your message and identity in the most creative way. 
          I created web design for many famous brand companies.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">What I'm Doing</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              avatar={testimonial.avatar}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Clients</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <ClientLogo 
              key={index}
              logo={client.logo}
              alt={client.alt}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
