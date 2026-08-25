import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useAuth } from "../lib/AuthContext";
import { doc, setDoc, deleteDoc, getDocs, collection, query, where, serverTimestamp } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../lib/firebase";
import { FloatingSVG } from "./FloatingSVG";

const MENU_ITEMS = [
  { id: "hesper-burger", name: "Hesper Burger", category: "BURGER", price: "650" },
  { id: "chicken-cheese", name: "Chicken Cheese Burger", category: "BURGER", price: "730" },
  { id: "4pc-broast", name: "4pc Broast", category: "BROAST", price: "1,200" },
  { id: "family-bucket", name: "Family Bucket", category: "BROAST", price: "2,800" },
  { id: "hesper-combo", name: "Hesper Combo", category: "DEAL", price: "850" },
  { id: "double-down", name: "Double Down", category: "DEAL", price: "1,500" },
];

export function FeaturedMenu() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) {
      setFavorites(new Set());
      return;
    }

    const fetchFavorites = async () => {
      try {
        const q = query(collection(db, "favorites"), where("userId", "==", user.uid));
        const snap = await getDocs(q);
        const favIds = new Set<string>();
        snap.forEach(doc => favIds.add(doc.data().itemId));
        setFavorites(favIds);
      } catch (err) {
        handleFirestoreError(err, OperationType.LIST, "favorites");
      }
    };
    fetchFavorites();
  }, [user]);

  const toggleFavorite = async (item: typeof MENU_ITEMS[0]) => {
    if (!user) return;
    
    const isFav = favorites.has(item.id);
    const newFavs = new Set(favorites);
    
    try {
      if (isFav) {
        newFavs.delete(item.id);
        setFavorites(newFavs);
        // Delete favorite
        // First find the doc id. Since we don't have it, we could query it
        const q = query(collection(db, "favorites"), where("userId", "==", user.uid), where("itemId", "==", item.id));
        const snap = await getDocs(q);
        snap.forEach(async (d) => {
          await deleteDoc(d.ref);
        });
      } else {
        newFavs.add(item.id);
        setFavorites(newFavs);
        // Create favorite
        const newRef = doc(collection(db, "favorites"));
        await setDoc(newRef, {
          userId: user.uid,
          itemId: item.id,
          itemType: item.category,
          createdAt: serverTimestamp()
        });
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, "favorites");
    }
  };

  return (
    <section className="bg-void py-[80px] md:py-[160px] relative overflow-hidden">
      <div className="absolute right-[-100px] top-[10%]">
        <FloatingSVG yOffset={150} rotation={20}>
          <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-30 stroke-[var(--color-gold)]">
            <rect x="50" y="50" width="200" height="200" fill="none" strokeWidth="1" />
            <circle cx="150" cy="150" r="100" fill="none" strokeWidth="0.5" />
          </svg>
        </FloatingSVG>
      </div>
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[80px] gap-8">
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-cormorant italic text-[32px] md:text-[48px] text-cream-20 leading-none mb-2"
            >
              What Islamabad orders.
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-black text-[48px] md:text-[96px] text-cream tracking-[-0.02em] leading-none"
            >
              THE CLASSICS.
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <button className="bg-transparent text-cream border border-[rgba(237,232,224,0.25)] font-sans text-[12px] tracking-[0.1em] uppercase px-[32px] py-[16px] hover:border-cream hover:text-cream transition-colors duration-250 ease-out">
              FULL MENU →
            </button>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="bg-cream-06 p-[1px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
            {MENU_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-void hover:bg-surface transition-colors duration-300 flex flex-col p-[32px] md:p-[40px] md:px-[32px] min-h-[320px] justify-between"
              >
                {/* TOP */}
                <div>
                  <div className="font-sans text-[9px] text-cream-20 tracking-[0.2em] uppercase">
                    {item.category}
                  </div>
                  <div className="w-[40px] h-[1px] bg-cream-06 my-[24px]" />
                  <div className="font-serif font-bold text-[32px] text-cream-20 leading-[1.1] group-hover:text-cream transition-colors duration-300 group-hover:drop-shadow-[0_0_20px_rgba(237,232,224,0.3)]">
                    {item.name}
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="flex items-end justify-between mt-[48px]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-sans text-[12px] text-cream-20">RS.</span>
                    <span className="font-accent font-bold text-[24px] text-gold">{item.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {user && (
                      <button 
                        onClick={() => toggleFavorite(item)}
                        className={`bg-transparent border ${favorites.has(item.id) ? 'border-gold text-gold' : 'border-[rgba(237,232,224,0.25)] text-cream'} group-hover:border-cream-40 font-sans text-[12px] px-[12px] py-[10px] transition-colors duration-300`}
                        title={favorites.has(item.id) ? "Remove from Favorites" : "Add to Favorites"}
                      >
                        {favorites.has(item.id) ? '★' : '☆'}
                      </button>
                    )}
                    <button className="bg-transparent text-cream border border-[rgba(237,232,224,0.25)] group-hover:border-cream-40 font-sans text-[10px] tracking-[0.1em] uppercase px-[20px] py-[12px] transition-colors duration-300">
                      ORDER
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
