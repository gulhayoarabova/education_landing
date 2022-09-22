import React from "react";
import styles from "../styles/Main.module.css";
import logo from "../pages/images/logo.png";
import play from "../pages/images/play.png";

import Image from "next/image";
import { FcDataConfiguration } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcFinePrint } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import Footer from "../container/Footer";
import Header from "../container/Header";
import Sliderr from "../container/Slider";



const section3 = [
  {
    title: "Markazlashtirilgan boshqaruv",
    paragraph:
      "Barcha o'quvchilar, xodimlar, o'quv jarayoni bilan bog'liq bo'lgan barcha ma'lumotlar yagona elektron bazada",
    icon: <FcDataConfiguration />,
    id: 1,
  },
  {
    title: "Avtomatlashtirilgan hisob-kitob",
    paragraph:
      "Barcha to'lovlar, qarzdorliklar, o'qituvchilarning oylik maoshlari va chiqimlarni avtomatik hisoblash",
    icon: <FcCurrencyExchange />,
    id: 2,
  },
  {
    title: "Statistik ma'lumotlar diagrammasi",
    paragraph:
      "Kunlik qabul, umumiy o'quvchilar soni, oylik tushum va qarzdorliklarni statistik diagrammalar asosida ko'rish",
    icon: <FcComboChart />,
    id: 3,
  },
  {
    title: "Intellektual dars jadvali",
    paragraph:
      "Aqlli dars jadvali yordamida dars soatlarini to'g'ri taqsimlash va ularga mos xonalarni aniq belgilash imkoniyati",
    icon: <FcFinePrint />,
    id: 4,
  },
  {
    title: "Elektron davomat tizimi",
    paragraph:
      "O'quvchilarni dars jarayonlariga qatnashishlarini doimiy belgilab borish hamda hisobotlarni shakllantirish",
    icon: <FcInspection />,
    id: 5,
  },
  {
    title: "O'quvchilar bilimini baholash",
    paragraph:
      "Fanlar bo'yicha rejali imtihonlar tashkillashtirish, imtihon natijalarini avtomatik hisoblash va tartiblash",
    icon: <FcMindMap />,
    id: 6,
  },
  {
    title: "Topshiriqlar (menejer) kalendari",
    paragraph:
      "Rahbar yoki menejer tomonidan o'qituvchi va xodimlarga muddatli topshiriqlar berish va bajarilishini nazorat qilish",
    icon: <FcCalendar />,
    id: 7,
  },
  {
    title: "SMS xabarnomalar yuborish",
    paragraph:
      "O'quvchilarga oylik to'lovlar, qarzdorlik, imtihon natijalari, tug'ilgan kun va bayramlarda sms xabarnomalar yuborish",
    icon: <FcSms />,
    id: 8,
  },
  {
    title: "Telegram bot orqali muloqot",
    paragraph:
      "Yangi tashkil etilgan o'quv kurslari, O'quvchilar davomati va boshqa yangiliklarni telegram bot orqali yuborish",
    icon: <FcSmartphoneTablet />,
    id: 9,
  },
];

const listItem = [
  {
    id: 1,
    txt: " 30 kun bepul;"
  },
  {
    id: 2,
    txt: "Cheklanmagan foydalanuvchilar;"
  },
  {
    id: 3,
    txt: "500 ta SMS paket;"
  },
  {
    id: 4,
    txt: "Tizimni sizning qoidalaringiz bo'yicha sozlash;"
  },
  {
    id: 5,
    txt: "Yangi versiyalardan foydalanish;"
  },
  {
    id: 6,
    txt: "Doimiy texnik xizmat;"
  },
  {
    id: 7,
    txt: "Bepul trening darslar;"
  },
  {
    id: 8,
    txt: "Mobil ilovadan foydalanish;"
  },
]

const Main = () => {
  return (
    <div className={styles.main_wrapper}>
      <Header/>
      {/****banner section***/}
      <div className={styles.banner}>
        <div className={styles.card_wrapper}>
        <div className={styles.mobile_card}>

        </div>
        <div className={styles.title_wrap}>
          <div className={styles.logo}></div>
          <p className={styles.central_txt}>Endi barchasini biz bajaramiz!</p>
        </div>
    </div>
      </div>
      {/****section1***/}
      <div className={styles.section1}>
        <Image
          src={logo}
          alt=""
          className={styles.logoImg}
          width={250}
          height={250}
        />
        <p className={styles.lrg_title}>
          EduSmart CRM 一 O`quv markazlar va maktablarni aqlli boshqarish tizimi
        </p>
        <p className={styles.sm_title}>
          O`quv markazingizni dunyoning ixtiyoriy nuqtasidan boshqaring!
        </p>
      </div>
      {/****section 2 (slider)***/}
      <div className={styles.slider}>
        <Sliderr/>
      </div>
      {/****section3***/}
      <div className={styles.section3}>
        <p className={styles.lrg_title}>O`zgarishlarga tayyormisiz?</p>
        <p className={styles.sm_title}>
          Eskicha boshqaruvdan voz kechish vaqti keldi. Endi siz emas
          kompyuterlar ishlaydi.
        </p>
        <div className={styles.inner_wrap}>
          {section3.map((el, id) => (
            <div key={id} className={styles.inner_item}>
              <div>{el.icon}</div>
              <p className={styles.inner_title}>{el.title}</p>
              <p className={styles.inner_para}>{el.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      {/****section4***/}
      <div className={styles.section4}>
        <div className={styles.landing_container}>
          <div className={styles.vital_calendar_part2}></div>
          <div className={styles.txt_wrap}>
            <p className={styles.txt_1}>Siz uchun!</p>
            <p className={styles.txt_2}>
              Edu-Smart mobil ilovasi: endi oquv markazingiz sizning
              smartfoningizda.
            </p>

            <button className={styles.play_market_btn}>
              <Image
                src={play}
                alt=""
                className={styles.play}
                width={31}
                height={34}
              />
              <a>Edu-Smart</a>
            </button>
          </div>
        </div>
      </div>

      {/****section5***/};
      <div className={styles.section5}>
        <div className={styles.left_txt_part}>
          <p className={styles.txt_title}>Nega aynan biz ?</p>
          <div className={styles.inside_txt}>
            <p>
              <FcApproval /> Ishonchli xavfsizlik siyosati
            </p>
            <p>
              <FcApproval /> Tezkor va sifatli xizmat
            </p>
            <p>
              <FcApproval /> Bepul sinov muddati
            </p>
            <p>
              <FcApproval /> Yuqori natija, arzon narx
            </p>
          </div>
          <a className={styles.section5_btn}>
            <FcApproval />
            Hozir boshlang
          </a>
        </div>
        <div className={styles.floating_img_wrap}>
          <div className={`${styles.floating_box1} ${styles.floating_box}`}></div>
          <div className={`${styles.floating_box2} ${styles.floating_box}`}></div>
          <div className={`${styles.floating_box3} ${styles.floating_box}`}></div>
          <div className={`${styles.floating_box4} ${styles.floating_box}`}></div>
          <div className={`${styles.floating_box5} ${styles.floating_box}`}></div>
          <div className={`${styles.floating_box6} ${styles.floating_box}`}></div>
          <div className={`${styles.floating_box7} ${styles.floating_box}`}></div>
          <div className={`${styles.floating_box8} ${styles.floating_box}`}></div>
          <div className={`${styles.floating_box9} ${styles.floating_box}`}></div>
        </div>
      </div>
      {/****section6***/};
<div className={styles.section6}>
  <div className={styles.txt_section}>
  <p className={styles.p1}>Barchasini bepul sinab ko`ring</p>
  <p className={styles.p2}>O`ylanmang! biz bilan bog`laning, biz sizga 30 kunlik bepul sinov muddatini taqdim etamiz.</p>
</div>
<div className={styles.list_section}>
<ul >
  <p className={styles.list_p}>Oylik shartnoma</p>
  <p  className={styles.list_p2}>400 000 som</p>
  {listItem.map((item, id) => (
    <div key={id}>
      <li className={styles.list_item}><FcCheckmark/> {item.txt}</li>
    </div>
  ))}
</ul>

<ul className={styles.ul_2}>
  <p className={styles.list_p}>Yillik shartnoma</p>
  <p className={styles.list_p2}>3 840 000 som</p>
  <p className={styles.list_p3}>Yillik shartnoma va filiallar uchun 20% chegirma</p>
 {listItem.map((item, id) => (
    <div key={id}>
      <li className={styles.list_item}><FcCheckmark/> {item.txt}</li>
    </div>
  ))}
</ul>
</div>
<button className={styles.list_btn}>Bepul foydalanish</button>

</div>
<Footer/>
    </div>
  );
};

export default Main;
