
<div class="wrapper">
  <header><a class="btn" href="/">⌂</a></header>
  <aside><a class="btn" href="/faqe">?</a></aside>
  <slot></slot>
</div>

<style>
  header {
    position: fixed;
    top: 20px;
    left: 20px;
  }

  aside {
    position: fixed;
    top: 20px;
    right: 20px;
  }

  a.btn {
    text-decoration: none;
    background-color: white;
    padding: 20px;
    display: block;
    border-radius: 50%;
    line-height: 0.5;
    color: black;
  }
</style>