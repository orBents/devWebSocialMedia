<template>
  <section class="container-main">
    <section class="container-account">
      <section class="account-header">
        <b-avatar
          size="8rem"
          src="https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg"
        ></b-avatar>
        <b-container>
          <b-row align-h="between">
            <b-col class="account-info-item">
              <span>100</span>
              <span>Posts</span>
            </b-col>
            <b-col class="account-info-item">
              <span>1000</span>
              <span>Seguidores</span>
            </b-col>
            <b-col class="account-info-item">
              <span>1000</span>
              <span>Seguindo</span>
            </b-col>
          </b-row>
        </b-container>
      </section>
      <section class="account-bio">
        <span>username</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section class="account-posts">
        <b-tabs content-class="mt-2" fill>
          <b-tab title="All" active>
            <div class="account-posts-grid">
              <div>
                <img
                  src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
                  alt="Responsive image"
                />
              </div>
              <div>
                <img
                  src="https://www.citybreak.com/sites/cb_citybreak/files/styles/slide_large/public/ben-o-bro-wpU4veNGnHg-unsplash.jpg?h=41f55a5b&itok=xr1okfZF"
                  alt="Responsive image"
                />
              </div>
              <div>
                <img
                  src="https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv.png"
                  alt="Responsive image"
                />
              </div>
              <div>
                <img
                  src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
                  alt="Responsive image"
                />
              </div>
              <div>
                <img
                  src="https://www.citybreak.com/sites/cb_citybreak/files/styles/slide_large/public/ben-o-bro-wpU4veNGnHg-unsplash.jpg?h=41f55a5b&itok=xr1okfZF"
                  alt="Responsive image"
                />
              </div>
              <div>
                <img
                  src="https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv.png"
                  alt="Responsive image"
                />
              </div>
            </div>
          </b-tab>
          <b-tab title="One">
            <div class="account-posts-single">
              <div>
                <post-card
                  imgSrc="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
                  user="username"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntsed do eiusmod tempor incididunt... more "
                  likes="100"
                ></post-card>
              </div>
              <div>
                <post-card
                  imgSrc="https://www.citybreak.com/sites/cb_citybreak/files/styles/slide_large/public/ben-o-bro-wpU4veNGnHg-unsplash.jpg?h=41f55a5b&itok=xr1okfZF"
                  user="username"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntsed do eiusmod tempor incididunt... more "
                  likes="100"
                ></post-card>
              </div>
              <div>
                <post-card
                  imgSrc="https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv.png"
                  user="username"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntsed do eiusmod tempor incididunt... more "
                  likes="100"
                ></post-card>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </section>
    </section>
  </section>
</template>

<script>
import "@/assets/css/main.css";
import PostCard from "../components/PostCard";
export default {
  name: "Perfil",
  components: { PostCard },
};
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.container-account {
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 5%;
}

.account-header {
  width: 100%;

  margin-top: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.account-info-item {
  display: flex;
  flex-flow: column;
  color: #ffffff;
  font-weight: 600;
  font-size: 2rem;
}
.user-info-item {
  width: 100%;
  display: flex;
}
.account-bio {
  width: 100%;
  margin-top: 3rem;
  text-align: left;
}

.account-bio span,
p {
  text-align: left;
  color: #ffffff;
}

.account-bio span {
  font-weight: 600;
  font-size: 1.25rem;
}
.account-posts {
  width: 100%;
  margin: 3rem 0 0 0;
}
.account-posts-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  gap: 12px;
}

.account-posts-grid div {
  flex-grow: 1;
  width: 30%;
  max-height: 200px;
}

.account-posts-grid div img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.account-posts-single {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
  flex-shrink: 0;
  width: 100%;
  gap: 12px;
}

.account-posts-single div {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 290px;
}

.account-posts-single div img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
