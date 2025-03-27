import { Button } from "./components/ui/button";

const merchItems = [
  {
    title: "Verified Vibes™ Hoodie",
    description: "Stay warm. Stay meaningless.",
    image: "/merch/hoodie-1.jpg"
  },
  {
    title: "S Corp Certified T-Shirt",
    description: "Compliance optional. Comfort guaranteed.",
    image: "/merch/t-shirt.jpg"
  },
  {
    title: "Unverified Impact Tote",
    description: "Carry your carbon neutrality in style.",
    image: "/merch/tote.jpg"
  },
  {
    title: "Certified Without Context Pin",
    description: "Fits blazers. Raises questions.",
    image: "/merch/buttons.jpg"
  },
  {
    title: "Blank Impact Report Notebook",
    description: "120 pages of plausible deniability.",
    image: "/merch/notebook.jpg"
  }
];

export default function MerchStore() {
  const handleClick = async (itemTitle: string) => {
    try {
      await fetch(import.meta.env.VITE_PUBLIC_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ item: itemTitle })
      });
      console.log(`Webhook sent for: ${itemTitle}`);
    } catch (err) {
      console.error("Webhook failed", err);
    }
  };
  
  return (
    <main className="min-h-screen bg-zinc-50 py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-4">🛒 S Corp™ Merch Store</h1>
      <p className="text-zinc-600 text-center max-w-xl mb-12">
        Ethically hollow goods for the image-conscious startup. Nothing here makes a difference, and that’s the point.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {merchItems.map((item, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-zinc-500 text-sm mb-4">{item.description}</p>
              <Button
                onClick={() => handleClick(item.title)}
                variant="default"
              >
                Register Interest 🛍️
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
