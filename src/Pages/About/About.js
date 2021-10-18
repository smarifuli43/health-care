import React from 'react';
import about1 from '../../img/about/about1.jpg'
import about2 from '../../img/about/about2.jpg'

const About = () => {
  return (
    <div className='container mb-5 details p-3 p-lg-4'>
      <div className='row '>
        <div className='col-12 col-lg-6'>
          <img src={about1} alt='' className='img-fluid rounded' />
        </div>
        <div className='col-12 col-lg-6 mt-4 mt-lg-4'>
          <h2>Our <span className="header">Motto</span> </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            laboriosam accusamus corrupti quo sapiente officiis animi culpa sed
            pariatur, nisi ullam tempore. Ipsam temporibus itaque error
            explicabo expedita. Quae, reprehenderit a nostrum, vel ex earum ut
            beatae laudantium mollitia repudiandae eius in minus aspernatur
            tempore? Fuga a consequuntur architecto dicta minus iure. Libero
            ipsum fugiat laudantium dolor nam commodi laborum maxime odit
            similique quaerat iusto quis doloribus, eius distinctio accusamus
            fuga itaque cum, modi porro corrupti tenetur odio dolore
            necessitatibus. Vero voluptatem aut tempora accusantium esse
            molestias itaque accusamus libero non repellendus, natus at. Ab
            magnam, maiores explicabo a ad culpa aliquid eligendi facere quidem
            vero alias corporis reiciendis iure, architecto at exercitationem
            aut! Architecto aspernatur eveniet officia eos aperiam porro
            corrupti quisquam fugiat, asperiores totam molestias excepturi vel
            nostrum similique maiores ipsa sint ad repellat libero soluta minima
            omnis numquam minus. Quasi molestias necessitatibus nobis voluptatum
            perferendis cum unde?
          </p>
        </div>
      </div>
      <div className='row py-5 mt-lg-5'>
        <div className='col-12 col-lg-6 mt-4 mt-lg-4'>
          <h2>Our <span className="header">Vission</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            laboriosam accusamus corrupti quo sapiente officiis animi culpa sed
            pariatur, nisi ullam tempore. Ipsam temporibus itaque error
            explicabo expedita. Quae, reprehenderit a nostrum, vel ex earum ut
            beatae laudantium mollitia repudiandae eius in minus aspernatur
            tempore? Fuga a consequuntur architecto dicta minus iure. Libero
            ipsum fugiat laudantium dolor nam commodi laborum maxime odit
            similique quaerat iusto quis doloribus, eius distinctio accusamus
            fuga itaque cum, modi porro corrupti tenetur odio dolore
            necessitatibus. Vero voluptatem aut tempora accusantium esse
            molestias itaque accusamus libero non repellendus, natus at. Ab
            magnam, maiores explicabo a ad culpa aliquid eligendi facere quidem
            vero alias corporis reiciendis iure, architecto at exercitationem
            aut! Architecto aspernatur eveniet officia eos aperiam porro
            corrupti quisquam fugiat, asperiores totam molestias excepturi vel
            nostrum similique maiores ipsa sint ad repellat libero soluta minima
            omnis numquam minus. Quasi molestias necessitatibus nobis voluptatum
            perferendis cum unde?
          </p>
        </div>
        <div className='col-12 col-lg-6'>
          <img src={about2} alt='' className='img-fluid rounded' />
        </div>
      </div>
    </div>
  );
};

export default About;