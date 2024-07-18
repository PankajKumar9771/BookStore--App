import mongoose from "mongoose";
const data = [
  {
    name: "Data Structures",
    title: "Understanding the Basics of Data Structures",
    subscription: "free",
    price: 0,
    category: "BCA",
    image:
      "https://c7.alamy.com/comp/GNB4H9/word-cloud-data-structure-GNB4H9.jpg",
    pdf: "https://mu.ac.in/wp-content/uploads/2021/05/Data-Structure-Final-.pdf",
  },
  {
    name: "Database Management",
    title: "An Introduction to Database Management Systems",
    subscription: "paid",
    price: 11,
    category: "BCA",
    image:
      "https://c7.alamy.com/comp/FR0XW4/database-management-concept-on-the-gearwheels-FR0XW4.jpg",
    pdf: "https://mrcet.com/downloads/digital_notes/ECE/III%20Year/DATABASE%20MANAGEMENT%20SYSTEMS.pdf",
  },
  {
    name: "Operating Systems",
    title: "Fundamentals of Operating Systems",
    subscription: "free",
    price: 0,
    category: "BCA",
    image:
      "https://c7.alamy.com/comp/G24RPP/windows-10-website-on-a-computer-screen-windows-10-is-a-personal-computer-G24RPP.jpg",
    pdf: "https://www.cl.cam.ac.uk/teaching/1011/OpSystems/os1a-slides.pdf",
  },
  {
    name: "Network Security",
    title: "Introduction to Network Security",
    subscription: "free",
    price: 0,
    category: "B.Tech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqJ5aelG8ABvYNUmE_QpBbKNbXeeIRPGI_fOqQDrcyg&sg",
    pdf: "https://training.apnic.net/wp-content/uploads/sites/2/2016/12/TSEC01.pdf",
  },
  {
    name: "Digital Electronics",
    title: "Basics of Digital Electronics",
    subscription: "free",
    price: 0,
    category: "B.Tech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8m3vqA7Tta3yfQCFagMij2FyI1j9Q5p6X4aphDmumA&s",
    pdf: "https://mu.ac.in/wp-content/uploads/2021/06/USIT102-Digital-Electronic.pdf",
  },
  {
    name: "Software Engineering",
    title: "Principles of Software Engineering",
    subscription: "free",
    price: 0,
    category: "BCA",
    image:
      "https://t3.ftcdn.net/jpg/06/30/65/66/360_F_630656615_BimGVBmjiuAyUqumQ7cCkydzgE9FLTIl.jpg",
    pdf: "https://www.vssut.ac.in/lecture_notes/lecture1428551142.pdf",
  },
  {
    name: "Computer Networks",
    title: "Introduction to Computer Networks",
    subscription: "free",
    price: 0,
    category: "BCA",
    image: "https://ncert.nic.in/textbook/pdf/lecs110.pdf",
    pdf: "https://ncert.nic.in/textbook/pdf/lecs110.pdf",
  },
  {
    name: "Web Technologies",
    title: "Understanding Web Technologies",
    subscription: "free",
    price: 0,
    category: "BCA",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*OaRU6kTgtm_shISCLb0fkQ.jpeg",
    pdf: "https://mrcet.com/downloads/digital_notes/IT/(R18A0517)%20Web%20Technologies.pdf",
  },
  {
    name: "Microprocessors",
    title: "Introduction to Microprocessors",
    subscription: "free",
    price: 0,
    category: "B.Tech",
    image:
      "https://www.newtondesk.com/wp-content/uploads/2020/04/microprocessor-handwritten-study-notes.jpg",
    pdf: "https://www.vssut.ac.in/lecture_notes/lecture1423813120.pdf",
  },
  {
    name: "Machine Learning",
    title: "Basics of Machine Learning",
    subscription: "free",
    price: 0,
    category: "B.Tech",
    image:
      "https://bernardmarr.com/img/Are%20Machine%20Learning%20And%20AI%20The%20Same.jpg",
    pdf: "https://courses.edx.org/asset-v1:ColumbiaX+CSMM.101x+1T2017+type@asset+block@AI_edx_ml_5.1intro.pdf",
  },
  {
    name: "Artificial Intelligence",
    title: "Introduction to Artificial Intelligence",
    subscription: "free",
    
    price: 0,
    category: "B.Tech",
    image:
      "https://c7.alamy.com/comp/2ANXDA8/ai-learning-and-artificial-intelligence-concept-business-modern-technology-internet-and-networking-concept-2ANXDA8.jpg",
    pdf: "https://www.uc.edu/content/dam/uc/ce/docs/OLLI/Page%20Content/ARTIFICIAL%20INTELLIGENCEr.pdf",
  },
  {
    name: "Discrete Mathematics",
    title: "Foundations of Discrete Mathematics",
    subscription: "free",
    price: 0,
    category: "BCA",
    image:
      "https://c7.alamy.com/comp/B363GY/old-chalkboard-with-hard-math-equations-B363GY.jpg",
    pdf: "https://discrete.openmathbooks.org/pdfs/dmoi-tablet.pdf",
  },
];



import Book from "./bookSchema.js";

const Mongo_Url = "mongodb://127.0.0.1:27017/bookStore";

main()
  .then((res) => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(Mongo_Url);
}

const initdb = async () => {
  await Book.insertMany(data);
};

initdb();
