<script setup>
import AboutPic from "../assets/about-pic.png";
</script>

<template>
  <div class="about-root">
    <v-sheet class="about-sheet" theme="dark">
      <v-container class="about-container">
        <v-row sm="2">
          <v-img :src="AboutPic" max-width="300"></v-img>
        </v-row>
        <v-row sm="9">
          <div class="about-body">
            <div class="about-header">Hello, my name is Kierstyn Just.</div>
            <div class="text-h5">
              Software Engineer / Full-Stack Web Developer
            </div>
            <br />
            I graduated from California State University, Fullerton with a B.S.
            in Computer Science. Before entering the world of programming, I was
            studying Fine Art and earned Associate's Degrees in four different
            fields.
            <br /><br />
            Pairing my art and design knowledge with a strong programming
            background, I am currently focusing these skills on software
            engineering and full-stack web development. When I'm not programming
            I enjoy traveling, watching horror movies, playing video games, and
            brewery hopping!
          </div>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<style scoped>
.about-container {
  width: 100%;
  height: inherit;
}

.about-header {
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: xx-large;
}

.about-root {
  height: 600px;
}

.about-sheet {
  height: 100%;
}
</style>
