import React from 'react'
import p_new from "../../pic/p_new.png"
import afterlogin from "../../pic/afterlogin.png"
import partnerlist from "../../pic/partnerlist.png"
import { style } from '../../const/style'

const Home = () => {
  return (
    <div style={style.content}>
      <div className='container'>
      <div className='text-center'>
        <h1>Aquntant</h1>
        <h2>The money flows, we help to keep track on it.</h2>
      </div>
        <div className='d-flex flex-column'>
          <div className='d-flex flex-lg-row flex-sm-column'>
            <div className='w-50 d-flex flex-column m-2'>
              <img className='w-100' src={afterlogin} alt=''/>
            </div>
            <div className='w-50 d-flex flex-column m-2'>
              <h3>Elegant design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis nulla eveniet praesentium, minus rerum suscipit totam necessitatibus at cum adipisci quas est ad veritatis nobis doloribus nemo esse impedit.
                Ratione est reprehenderit at temporibus fugit mollitia ad nihil id fugiat quasi. Consequuntur magnam possimus, exercitationem iure iste hic. Aut, adipisci beatae sit iste tempora dignissimos doloribus vero voluptate quo?
                Harum nihil officiis incidunt cupiditate iusto qui reprehenderit molestiae ipsa! Atque vitae maxime magni perspiciatis, iste perferendis dolorem, ipsa quasi reprehenderit at culpa veniam mollitia voluptates tempora illum exercitationem beatae.</p>
            </div>
          </div>
        </div>
        <div className='d-flex flex-lg-row-reverse flex-sm-column'>
          <div className='w-50 d-flex flex-column m-2'>
            <img className='w-100' src={p_new} alt=''/>
          </div>
          <div className='w-50 d-flex flex-column m-2'>
            <h3 className='text-end'>Easy to use</h3>
            <p className='text-end'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum nesciunt tenetur quia pariatur. Optio numquam incidunt perspiciatis porro voluptas fuga architecto commodi, eius quis. Nobis excepturi quod sequi iste?
              Nisi ipsum quis, incidunt, aspernatur eius nam earum deserunt dolor obcaecati rem id nostrum ab corrupti, voluptate voluptas nihil blanditiis! Maiores saepe velit fugit praesentium dolor et cum culpa rerum.
              Reprehenderit laborum quibusdam labore, necessitatibus rerum quae magnam laudantium accusantium architecto esse distinctio ea dolorem eum nulla eius recusandae saepe vel sapiente enim error asperiores excepturi est! Cupiditate, soluta iusto.
              Facere et ab aperiam cumque possimus ipsa, placeat voluptatum. Corrupti at qui nulla sit, quidem hic suscipit iusto? Explicabo quod dolorem enim est esse suscipit molestiae quibusdam soluta velit dignissimos.
            </p>
          </div>
        </div>
        <div className='d-flex flex-lg-row flex-sm-column'>
            <div className='w-50 d-flex flex-column m-2'>
              <img className='w-100' src={partnerlist} alt=''/>
            </div>
            <div className='w-50 d-flex flex-column m-2'>
              <h3>Everything in place</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ipsam odit sed perspiciatis. Velit rem fugit quas quos illum, mollitia repudiandae voluptatem odio molestias autem, fugiat eius eaque veritatis nam!
Dolore aliquam, id, consequatur est, veritatis quos labore cupiditate fugiat libero possimus quo explicabo. Explicabo excepturi dolorem sunt delectus, a aspernatur? Laborum illo recusandae commodi veniam, expedita ullam? Laudantium, placeat!
Asperiores, tenetur! Nulla asperiores ipsa soluta aperiam dolore nisi molestiae, dicta nemo nostrum incidunt eius ex expedita inventore, exercitationem ad architecto odit doloremque esse sit adipisci laboriosam! Enim, voluptates voluptatem!
Ex saepe cum quasi nulla voluptas ipsum voluptatum, numquam, magni mollitia in accusantium illum similique adipisci cumque voluptatem eos corporis sint molestias quibusdam voluptates nobis explicabo, pariatur laborum! Id, ducimus?</p>
            </div>
          </div>
          <p className='text-center'>For more information, please visit <a href='/about'>About</a> page.</p>
        </div>
      </div>
  )
}

export default Home