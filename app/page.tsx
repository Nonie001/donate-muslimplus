"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Server, 
  BookOpen, 
  Wrench, 
  Rocket,
  Smartphone,
  Building2,
  User,
  Info,
  Download,
  Copy,
  Check
} from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 rounded-md hover:bg-emerald-100 transition-colors"
      title="คัดลอก"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-600" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-gray-400" />
      )}
    </button>
  );
}

function DownloadQR() {
  const handleDownload = async () => {
    const response = await fetch("/qrcode.png");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "muslimplus-promptpay-qr.png";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 transition-colors"
    >
      <Download className="w-3.5 h-3.5" />
      บันทึก QR Code
    </button>
  );
}

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-32 md:h-48 overflow-hidden">
        <Image
          src="/banner.png"
          alt="Muslim Plus Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-white"></div>
      </div>

      <div className="max-w-lg mx-auto px-5 -mt-14 relative z-10 pb-16">
        {/* Logo + Title */}
        <div className="text-center mb-6">
          <Image
            src="/logo.png"
            alt="Muslim Plus Logo"
            width={72}
            height={72}
            className="rounded-full mx-auto mb-4 shadow-md"
          />
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            สนับสนุน Muslim Plus
          </h1>
        </div>

        {/* Intro Text */}
        <p className="text-gray-600 text-sm leading-relaxed text-center mb-8">
          Muslim Plus เป็นแอปพลิเคชันฟรีสำหรับมุสลิมทุกคน 
          พัฒนาเพื่อช่วยเหลือในการปฏิบัติศาสนกิจประจำวัน 
          การสนับสนุนของท่านจะช่วยให้เราพัฒนาแอปให้ดียิ่งขึ้น
        </p>

        {/* ─── Payment Section ─── */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2 justify-center">
            <Smartphone className="w-4 h-4 text-emerald-600" />
            ช่องทางสนับสนุน
          </h2>

          {/* QR Code First */}
          <div className="text-center mb-4">
            <p className="text-xs text-gray-500 mb-3">สแกน QR Code (PromptPay)</p>
            <div className="inline-block p-3 bg-gray-50 rounded-xl">
              <Image
                src="/qrcode.png"
                alt="PromptPay QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="block">
              <DownloadQR />
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-emerald-50 rounded-xl p-5">
            <p className="text-xs text-gray-500 text-center mb-3">หรือโอนผ่านเลขบัญชี</p>
            <div className="space-y-3 text-sm text-gray-800">
              <div className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="flex-1">
                  <span className="text-xs text-gray-500">เลขบัญชี</span>
                  <div className="flex items-center">
                    <p className="font-medium">928-225417-8</p>
                    <CopyButton text="9282254178" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-xs text-gray-500">ธนาคาร</span>
                  <p className="font-medium">กสิกรไทย</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-xs text-gray-500">ชื่อบัญชี</span>
                  <p className="font-medium">อานัส เอามิง</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Divider ─── */}
        <hr className="border-gray-100 mb-8" />

        {/* ─── Why Support ─── */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Heart className="w-4 h-4 text-emerald-600" />
            ทำไมต้องสนับสนุน?
          </h2>
          <div className="space-y-2.5">
            {[
              { text: "รักษาแอปให้ฟรีตลอดไป", icon: Sparkles },
              { text: "พัฒนาฟีเจอร์ใหม่ๆ อย่างต่อเนื่อง", icon: TrendingUp },
              { text: "ปรับปรุงข้อมูลเวลาละหมาดให้แม่นยำ", icon: CheckCircle2 },
              { text: "เพิ่มเนื้อหาดุอาอ์และคำสอนอิสลาม", icon: BookOpen },
              { text: "จ่ายค่า server และค่าใช้จ่ายในการดำเนินงาน", icon: Server }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-600 text-sm">
                <item.icon className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── How Money Is Used ─── */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            การใช้เงินสนับสนุน
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            เงินสนับสนุนที่ได้รับจะถูกจัดการโดยทีมงาน Muslim Plus 
            และนำไปใช้เพื่อพัฒนาและดูแลแอปให้ดียิ่งขึ้น
          </p>
          <div className="space-y-2.5 mb-4">
            {[
              { text: "ค่าใช้จ่าย server และ API", icon: Server },
              { text: "ปรับปรุงและพัฒนาฟีเจอร์ใหม่", icon: TrendingUp },
              { text: "เพิ่มเนื้อหาคุณภาพ", icon: BookOpen },
              { text: "ดูแลและซ่อมแซมบั๊ก", icon: Wrench },
              { text: "พัฒนาต่อยอดโปรเจกต์", icon: Rocket },
              { text: "ค่าตอบแทนทีมงานที่ดูแลและพัฒนา", icon: User }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-600 text-sm">
                <item.icon className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="bg-emerald-50 rounded-lg p-3 text-xs text-gray-600">
            💡 เงินทุกบาทจะถูกใช้เพื่อประโยชน์ของโครงการและทีมงานที่ทุ่มเทพัฒนาอย่างโปร่งใส
          </div>
        </div>

        {/* ─── Divider ─── */}
        <hr className="border-gray-100 mb-8" />

        {/* ─── Sadaqah Jariyah ─── */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Sadaqah Jariyah
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            การสนับสนุน Muslim Plus ถือเป็น <span className="font-semibold text-amber-700">Sadaqah Jariyah</span> 
            {" "}เพราะเมื่อแอปช่วยให้มุสลิมคนหนึ่งปฏิบัติศาสนกิจ ท่านก็จะได้รับบุญกุศลร่วมด้วย
          </p>
          <blockquote className="border-l-2 border-amber-400 pl-4 italic text-gray-500 text-sm leading-relaxed">
            &ldquo;เมื่อมนุษย์ตาย การงานของเขาจะหยุด เว้นแต่สามสิ่ง: 
            ซอดะกอฮฺญารีเยาะฮฺ (การบริจาคที่มีประโยชน์ต่อเนื่อง) 
            ความรู้ที่เป็นประโยชน์ และบุตรที่ดีที่ทำดุอาอ์ให้&rdquo;
            <span className="block text-xs text-gray-400 not-italic mt-1">— ฮะดีษมุสลิม</span>
          </blockquote>
        </div>

        {/* ─── Notes ─── */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-gray-400" />
            หมายเหตุ
          </h3>
          <ul className="space-y-1.5 text-gray-500 text-xs">
            {[
              "Muslim Plus ไม่มีโฆษณา",
              "ไม่เก็บค่าใช้จ่ายใดๆ จากผู้ใช้",
              "ทุกฟีเจอร์เปิดให้ใช้งานฟรี 100%",
              "การสนับสนุนเป็นไปด้วยความสมัครใจ"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-300 rounded-full shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Footer ─── */}
        <div className="text-center">
          <p className="text-amber-600 font-arabic text-xl mb-2">بارك الله فيكم</p>
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            ขอบคุณทุกการสนับสนุนจากใจ
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            ไม่ว่าจะเป็นจำนวนเท่าใด ทุกบาททุกสตางค์มีค่าสำหรับเรา<br />
            ขอให้อัลลอฮฺทรงประทานบารอกะฮ์แก่ท่านและครอบครัว
          </p>
          <p className="text-amber-600 font-arabic text-lg">جزاكم الله خيرا</p>
        </div>
      </div>
    </div>
  );
}
