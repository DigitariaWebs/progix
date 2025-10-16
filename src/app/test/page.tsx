import CardsScroll from "@/components/cards-scroll/CardsScroll";

export default function TestPage() {
  const items = [
    {
      title: "Brand Foundation",
      copy:
        "The heart of your company’s story. It shapes your vision, values, and voice, ensuring a clear and powerful impact in every interaction.",
      imageSrc: "/images/img04.jpg",
    },
    {
      title: "Design Identity",
      copy:
        "Your brand's visual fingerprint. It crafts a distinctive look that sparks recognition and builds emotional connections with your audience.",
      imageSrc: "/images/Screenshot 2025-10-08 225558.png",
    },
    {
      title: "Digital Presence",
      copy:
        "Our web solutions combine cutting-edge design and seamless functionality to create experiences that captivate and inspire your audience.",
      imageSrc: "/images/Screenshot 2025-10-08 230044.png",
    },
    {
      title: "Product Design",
      copy:
        "We craft user-first products that are both functional and visually appealing, delivering solutions that leave a lasting impression.",
      imageSrc: "/images/Screenshot 2025-10-08 225008.png",
    },
  ];

  return <CardsScroll items={items} />;
}
