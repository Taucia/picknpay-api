<template>

<article
    class="col-md-6 col-lg-4 col-sm-10"
    v-for="item in AboutArray"
    :key="item.id"
  >
    <section class="card-content">
      <div class="card-content">
        <div class="card">
          <div class="layer"></div>
          <div class="content">
            <div class="image">
              <img :src="item.icon" alt="avatar" />
            </div>
            <br />
            <div class="details ">
              <span>{{ item.title }}</span>
              <div class="col-12">
             <span>
               {{item.text}}
                </span> </div>
                <div class="col-12">
                  <span>{{item.text2}}</span>
                </div>
                 
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script scoped>
export default {
  data() {
    return {
      AboutArray: [
        {
          id: 1,
          icon: "https://i.postimg.cc/d1YzZJML/kitkat.jpg",
          title: "Nestle kitcat 4 Finger Milk Chhocolate",
          text: "Price: R10.99",
          text2:"40g",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.image {
  width: fit-content;
  border-radius:5px;
}

article{
    overflow-x: hidden;
}

.card-content {
  /* margin: 200px auto 100px; */
   padding-top:20px; 
}

.card-content .card {

  position: relative;
  margin: 0 auto;
  width: 350px;
  background: white;
  color: black;
  /* padding: 20px; */
  box-sizing: border-box;
  
  text-align: center;
  
  overflow: hidden;
  border-radius: 10px;
}
.card-content .card .layer {
  position: absolute;
  top: 0;
  left: calc(100% - 2px);
  height: 100%;
  width: 100%;
  
  z-index: 1;
  transition: 0.5s;
}
.card-content .card:hover .layer {
  left: 0;
  right:0;}
.card-content .card .content {
  position: relative;
  z-index: 2;
}
.card-content .card .content p {
  font-size: 18px;
  line-height: 24px;
}
.card-content .card .content .image {
  width: 100%;
  height: 180px;
  /* object-position: -30px 0; */
  /* margin: 0 auto; */

  overflow: hidden;

  box-shadow: 0 10px 20px rgba(206, 31, 246, 0.2);
  object-fit: cover;
}
.card-content .card .content .details h2 {
  font-size: 18px;
}
.card-content .card .content .details span {
  color: black;
  font-size: 14px;
  transition: 0.5s;
}



@media all and (max-width: 1250px) {
    .card{
    width: 15em !important;
    }


}
</style>
