<script lang="ts">
  import '../../app.css';
</script>

<svelte:head>
	<title>Metal or Medal :: Faqe</title>
</svelte:head>

<h1>Faqe (fake FAQ)</h1>

<p>Questions no one asked, but I'm pretty sure someone is wondering.</p>

<dl>
  <dt><dfn>What's with the horrific piano?</dfn></dt>
  <dd>The point here is to see if you are able to recognize a music genre based solely on the notes. In the cases presented here the arrangement is the key difference between the two. The piano sound is the equivalent of putting a mask to the singer whose identity you want to find out. Besides the songs are generated in real time, so they are as only as pretty as a player piano can do.</dd>

  <dt><dfn>Why would someone create such a silly game?</dfn></dt>
  <dd>I like metal and I like classical music. Some people don't understand how these two facts can be possible at the same time. This silly game is here to show them how.</dd>

  <dt><dfn>Who would create such a silly game?</dfn></dt>
  <dd><a href="https://regisfrias.com">Me</a></dd>
</dl>

<footer>
  <a href="/">← Home</a>
</footer>

<style>
  dl {
    border-top: 1px solid lightgray;
    margin-top: 50px;
    padding-top: 20px;
  }
  dt {
    padding-top: 30px;
  }
  dd {
    margin-top: 10px;
  }

  footer {
    border-top: 1px solid lightgray;
    background-color: black;
    padding: 10px 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  footer a {
    color: white;
  }
</style>
