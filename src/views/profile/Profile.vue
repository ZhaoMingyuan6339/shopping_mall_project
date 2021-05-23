<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll class="scroll-height" @scrollEvent = profileListen>
      <login />
      <money />
      <div class="line"></div>
      <profile-list />
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import Login from "@/views/profile/childComponents/Login";
import Money from "@/views/profile/childComponents/Money";
import ProfileList from "@/views/profile/childComponents/ProfileList";
import BackTop from "@/components/common/backtop/BackTop";
export default {
  name: "Profile",
  data() {
    return {
      isShow:true,
    }
  },
  methods:{
    profileListen(position) {
      console.log(position)
      if(Math.abs(position.y) > 1000) {
        this.isShow = true;
      }else {
        this.isShow = false;
      }
    }
  },
  components: {
    NavBar,
    Scroll,
    Login,
    Money,
    ProfileList,
    BackTop,
  }
}
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
}

.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
}
</style>
