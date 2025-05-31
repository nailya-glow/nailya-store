import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function NailyaHome() {
  return (
    <div className="bg-pink-50 min-h-screen text-right font-sans">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-700">Nailya نايليا</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost">الرئيسية</Button>
          <Button variant="ghost">المنتجات</Button>
          <Button variant="ghost">من نحن</Button>
          <Button variant="ghost">تواصل معنا</Button>
          <ShoppingCart className="text-pink-700" />
        </div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 bg-pink-100"
      >
        <h2 className="text-3xl font-bold text-pink-800 mb-4">جمالك يبدأ من أطراف أناملك</h2>
        <p className="text-pink-600 mb-6 text-lg">مجموعة أظافر صناعية فاخرة بلمسة أنثوية</p>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl">
          تسوقي الآن
        </Button>
      </motion.section>

      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <img
                src="https://via.placeholder.com/300x200.png?text=Nail+Set"
                alt="مجموعة أظافر"
                className="rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-700 mb-2">
                طقم أظافر فاخر
              </h3>
              <p className="text-sm text-gray-600 mb-2">تصميم أنثوي، سهل التركيب، يدوم طويلاً</p>
              <div className="flex justify-between items-center">
                <span className="text-pink-600 font-bold text-lg">45 درهم</span>
                <Button size="sm" className="bg-pink-600 text-white">
                  أضف للسلة
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">تفاصيل المنتج</h2>
        <img
          src="https://via.placeholder.com/400x250.png?text=Product+Detail"
          alt="تفاصيل المنتج"
          className="rounded-xl mb-4"
        />
        <p className="text-gray-700 mb-2">
          طقم أظافر فاخر يحتوي على 24 قطعة بتصميم وردي لامع، يشمل لاصق ومبرد، سهل التركيب يدوم حتى 10 أيام.
        </p>
        <ul className="list-disc pr-5 text-gray-600">
          <li>مناسب لجميع المقاسات</li>
          <li>يأتي في علبة أنيقة</li>
          <li>مثالي للمناسبات اليومية</li>
        </ul>
      </section>

      <section className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow mt-8">
        <h2 className="text-xl font-bold text-pink-800 mb-4">إتمام الطلب</h2>
        <form className="grid gap-4">
          <Input placeholder="الاسم الكامل" className="text-right" />
          <Input placeholder="رقم الهاتف" className="text-right" />
          <Input placeholder="عنوان التوصيل" className="text-right" />
          <Button className="bg-pink-600 text-white">إرسال الطلب</Button>
        </form>
      </section>

      <footer className="bg-white text-center p-4 text-pink-700 mt-10">
        &copy; 2025 Nailya نايليا. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}