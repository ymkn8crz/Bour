<template>
  <footer class="footer">
    <div class="footer__link">
      <div class="head">Link</div>
      <div class="body">
        <ul class="link">
          <li><a href="/">TOP Page</a></li>
          <li><a href="/central">Central League</a></li>
          <li><a href="/pacific/">Pacific League</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__small">
      <div class="head">Author:@ymkn8crz</div>
      <div class="body">GitHub:<a href="https://github.com/ymkn8crz/Bour">ymkn8crz/Bour</a></div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
$color_footer: #dcdcdc;
.footer {
  &__link {
    height: 100px;
    width: 70%;
    float: left;
    background-color: $color_footer;
    .head {
      height: 10%;
      margin-left: 10%;
    }
    .body {
      ul {
        width: 100%;
      }
      ul li {
        display: inline-block;
        width: 30%;
        text-align: center;
      }
      ul li a {
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
  &__small {
    height: 100px;
    width: 30%;
    float: right;
    font-size: 10px;
    background-color: $color_footer;
    .head, .body {
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>