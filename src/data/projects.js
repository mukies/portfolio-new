import ecom from "../assets/ecom.png";
import chat from "../assets/chat.png";
import social from "../assets/social.png";
import tour from "../assets/tour.png";

export const projects = [
  {
    img: tour,
    title: "tour and travel booking website",
    main: "I developed a tour and travel booking website backend part using Node js, express js, enabling users to book tour packages, nearby hotels, and guides. It features Google and JWT-based authentication with Passport js, integrated payments via eSewa and Khalti, and a partner program for hotels, transport services, and guides to register and offer their services.",
    demo: "https://www.linkedin.com/posts/mukesh-bhattarai-720238157_mernstack-webdevelopment-travelbooking-activity-7223583598874923008-R8fs?utm_source=share&utm_medium=member_desktop",
    source: "https://github.com/mukies/wonderverse-backend",
  },
  {
    img: social,
    title: "Social media application (Mie)",
    main: "This is a dynamic social media application using the MERN stack, featuring JWT-based authentication and real-time messaging with Socket.io. Users can post statuses, like/unlike posts, comment, follow/unfollow others, and share media, with online user visibility for enhanced interaction.",
    demo: "https://www.linkedin.com/posts/mukesh-bhattarai-720238157_project-deployed-my-recent-mern-project-activity-7185659534105841666-Bu9C?utm_source=share&utm_medium=member_desktop",
    source: "https://github.com/mukies/mie-blog",
  },
  {
    img: chat,
    title: "Real-time chat app",
    main: "This is a real-time chat application using the MERN stack, Socket.io and cloudinary, enabling seamless real-time messaging. It supports features like online user visibility, media sharing, and secure communication, providing an interactive and efficient chat experience.",
    demo: "https://miechat.netlify.app/",
    source: "https://github.com/mukies/mie-chat-MERN",
  },
  {
    img: ecom,
    title: "E-commerce website",
    main: "This is an e-commerce website using the MERN stack, offering features such as product browsing, cart management, and secure payment integration. The platform ensures a smooth shopping experience with responsive design and real-time updates.",
    demo: "https://meroshop.netlify.app",
    source: "https://github.com/mukies/full-stack-ecommerce-website-main",
  },
];
