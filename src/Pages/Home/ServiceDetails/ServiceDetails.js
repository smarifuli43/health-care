import { useParams } from 'react-router';
import './ServiceDetails.css'

const services = [
  {
    id: 1,
    name: 'Dermatology',
    img: 'https://i.ibb.co/56RFRj4/DERMATOLOGY.jpg',
    description:
      "The mission of the Department of Dermatology at Carepoint Hospital is to provide superior comprehensive dermatologic care to our patients, exceed our patients' expectations in service and satisfaction, and advance the science of dermatology through research and education. Our team of board certified dermatologists, residents, fellows, and medical assistants dedicate themselves to the skillful diagnosis and treatment of the wide range of dermatologic conditions. Our team is comprised of both general dermatologists and sub-specialists, offering the latest treatments for psoriasis, eczema, acne, and skin cancer.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vel, consequuntur nostrum assumenda reprehenderit illum repellendus, ratione dignissimos aperiam labore laborum earum suscipit unde molestiae, minus perferendis temporibus nihil adipisci!",
  },
  {
    id: 2,
    name: 'Neurology',
    img: 'https://i.ibb.co/kmfh025/neorology.jpg',
    description:
      'The Department of Neuro Medicine at the Carepoint is dedicated to exceptional patient care center is fortunate to have state - of - the - art facilities for evaluating patients with neurological diseases, performing the latest clinical and basic science investigations. Our regional and national referral base and the capacity of our hospitals and new outpatient space ensure that our trainees, faculty, staff and patients have the best possible experience. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, distinctio quaerat quam accusamus eos quisquam in perspiciatis earum sapiente doloremque repellendus voluptatum ab adipisci dolorum, maxime molestias, magni fugit explicabo.',
  },
  {
    id: 3,
    name: 'Nephrology',
    img: 'https://i.ibb.co/Vw43rbX/nephrology.jpg',
    description:
      'Nephrology of Carpoint Hospital is a leading kidney disease related health service provider of all modalities and kidney support, includes diagnosis, evaluation, and management of all acute and chronic disease conditions. It provides high quality dialysis services with various specially developed dialysis equipment’s. The department is also part of our kidney transplant program in association with Department of Urology. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde tempora officia doloremque. Assumenda, autem, doloribus ipsam fuga modi placeat iste id dignissimos explicabo, hic repellendus commodi laborum necessitatibus dolorem mollitia!',
  },
  {
    id: 4,
    name: 'Diabetes & Endocrinology ',
    img: 'https://i.ibb.co/0CZfWhf/DIABETES.jpg',
    description:
      'This Department is established to improve the quality of life for people with diabetes and other endocrinology disorders. For diabetes patients, we help reduce complications and sufferings and contribute to the ultimate prevention and cure. For patients with other endocrinology disorders, including nodules in the endocrine system, we offer specialty care and individualized treatment plans that focus on the patient’s needs. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate dolor dolore temporibus repellendus rerum labore laudantium, cum alias ad dolorem similique quidem aliquid est, quaerat voluptatum, delectus pariatur minus non.',
  },
  {
    id: 5,
    name: 'Vascular surgery',
    img: 'https://i.ibb.co/RvBXfmv/vascular.jpg',
    description:
      'The Department of Vascular Surgery provides comprehensive services for patients with all types of peripheral vascular disorders, including the new technology of catheter-based intervention as well as traditional surgical treatments. Our staff provides dialysis access to allow those individuals with end-stage renal disease to begin treatment. Many patients are also treated for cerebrovascular disease to reduce the risk of stroke. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem cupiditate vitae facilis libero temporibus corrupti quae velit enim nobis sit, itaque similique tempora, repellendus aliquid dicta aliquam rerum illum!',
  },
  {
    id: 6,
    name: 'Cardiac Surgery',
    img: 'https://i.ibb.co/k2s5Y2Q/CARDIAC.jpg',
    description:
      'Cardiovascular surgeons perform many different types of operations, including heart valve repair and replacement, heart defect repair, coronary artery bypass, aneurysm repair, transmyocardial laser revascularization, and heart transplantation.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nesciunt pariatur iure magni laboriosam, commodi voluptate autem tenetur veniam nulla id animi, odit optio. Vero tenetur esse laborum sequi exercitationem blanditiis quaerat rem obcaecati ipsam vitae, quo similique quam accusantium aliquam adipisci sit ex eveniet molestiae expedita quae eum? Ipsum.',
  },
];


const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = services.find((service) => service.id === parseInt(serviceId));
   const { name, img, description } = service;
  return (
    <div className='container my-5'>
      <div className='row details p-4'>
        <div className='col-12 col-lg-6'>
          <img src={img} alt='' className='img-fluid rounded' />
        </div>
        <div className='col-12 col-lg-6 mt-4 mt-lg-4'>
          <h2>{name}</h2>
          <p>{description}</p>
          <button className="btn-hospital">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;