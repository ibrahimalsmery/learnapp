import EductionTextCard from "@/components/sections/EductionTextCard";
import Fquestion from "@/components/sections/Fquestion";
import PersonCard from "@/components/sections/PersonCard";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Topbar />
      {/* hero section */}
      <section className="flex flex-wrap items-center justify-center h-auto">
        <h1 className="semibold-primary  text-[60px] text-center lg:text-right md:w-[428px]">تعلم مدرستي في جوالي📱</h1>
        <img className="object-fill" src="/figma/simsim/main/simsim-hero-w-kids.png" alt="hero image" />
      </section>
      {/* problem of education */}
      <section className="flex  flex-col justify-center items-center gap-[10px] text-center">
        <h1 className="semibold-primary  text-[40px] w-[428px]">مشكلة التعليم والحل</h1>
        <img src="/figma/simsim/main/problem_of_education.jpg" className="w-[752px] h-[450px]  rounded-[10px] object-cover" alt="problem of eduction" />
      </section>

      {/*  education methodology */}
      <section className="flex flex-col justify-center items-center gap-[30px] p-[10px] text-center">
        <h1 className="semibold-primary  text-[60px] w-[428px]">منهجية التعليم</h1>
        <p className="semibold-30  text-center">في افتح ياسمسم نؤمن بأن التعلم يجب أن يكون ممتعًا ومحفزًا ومليئًا بالإبداع. إليك كيف نصمم تجربة استثنائية لطفلك:
        </p>
        <EductionTextCard title="دروس تعليمية واختبارات ممتعة" description="دروس تعليمية واختبارات تفاعلية شيقة تساعد في تعزيز مهارات القراءة والفهم مع تحفيز الطفل للتقدم." icon="📚" />
        <EductionTextCard title="قصص وأنشطة تفاعلية" description="محتوى مميز من القصص، الأنشطة، والأناشيد، يقدم بأسلوب جذاب يعزز فهم الطفل ويشجعه على المشاركة." icon="📖" />
        <EductionTextCard title="القرآن الكريم والأناشيد" description="مكتبة صوتية ومرئية تضم تلاوات عطرة وأناشيد تعليمية تُثري تجربة الطفل الروحية واللغوية.
." icon="📕" />
      </section>
      {/* our customers */}
      <section className="flex flex-col justify-center items-center p-[10px] gap-[10px]">
        <h1 className="semibold-primary  text-[60px] ">ماذا يقول احبائنا عنا </h1>
        <div className="flex justify-center gap-[10px]">
          <PersonCard img="/figma/simsim/main/person.jpg" name="احمد" country="المغرب" />
          <PersonCard img="/figma/simsim/main/person.jpg" name="احمد" country="المغرب" />
          <PersonCard img="/figma/simsim/main/person.jpg" name="احمد" country="المغرب" />
        </div>
      </section>
      {/* FQA */}
      <section className="flex flex-col justify-center items-center p-[10px] gap-[10px]">
        <h1 className="semibold-primary  text-[60px] ">الاسئلة الشائعة </h1>
        <p className="semibold-30  text-center">نعرف أنكم قد تتساءلون عن بعض التفاصيل، لذلك جمعنا أكثر الأسئلة تكرارًا هنا.</p>
        <div className="flex flex-col items-center justify-center gap-[30px] w-full">
          <Fquestion question="مل هي الفئة العمرية المستهدفة ؟" answer="التطبيق موجه للأطفال من سن 3 إلى 10 سنوات، مع محتوى مناسب لكل مرحلة عمرية." />
          <Fquestion question="مل هي الفئة العمرية المستهدفة ؟" answer="التطبيق موجه للأطفال من سن 3 إلى 10 سنوات، مع محتوى مناسب لكل مرحلة عمرية." />
          <Fquestion question="مل هي الفئة العمرية المستهدفة ؟" answer="التطبيق موجه للأطفال من سن 3 إلى 10 سنوات، مع محتوى مناسب لكل مرحلة عمرية." />
        </div>
      </section>
      {/* footer */}
      <footer className="flex flex-wrap items-start justify-start bg-[var(--color-primary)] text-white p-[10px] gap-[40px] min-h-[500px] pt-20">
        <div className="md:flex-1  flex flex-col items-start">
          <div className="flex items-center">
            <img className="w-[58px] h-[87px] " src="/figma/simsim/main/opensimsim.png" alt="logo" />
            <span>منصة افتح ياسمسم</span>
          </div>
          <p>منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم ممتعة للأطفال، مصممة لتنمية مهاراتهم بطريقة إبداعية.</p>
        </div>
        <div className="md:flex-1">
          <h1 className="semibold-30 pb-5">البرامج التعليمية</h1>
          <hr className="border-[white] border-[2px]" />
          <ul className="space-y-3 pt-3">
            <li>اللغة العربية</li>
            <li>الرياضيات</li>
            <li>العلوم</li>
          </ul>
        </div>
        <div className="md:flex-1">
          <h1 className="semibold-30 pb-5">الروابط السريعة</h1>
          <hr className="border-[white] border-[2px]" />
          <ul className="space-y-3 pt-3">
            <li>الرئيسية</li>
            <li>البرامج التعليمية</li>
            <li>عن المنصة</li>
          </ul>
        </div>
        <div className="md:flex-1">
          <h1 className="semibold-30 pb-5">تواصل معنا</h1>
          <hr className="border-[white] border-[2px]" />
          <ul className="space-y-3 pt-3">
            <li>9700599665806+</li>
            <li>palziyadmezher@gmail.com</li>
          </ul>
        </div>

      </footer>
    </>
  );
}
