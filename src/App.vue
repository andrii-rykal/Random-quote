
<template>
  <header>
    
  </header>

  <main>
    <h1 class="title">Quotes of famous people</h1>
    <div class="quotes-block">
      <p class="quotes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, a.</p>
      <p class="author">Lorem, ipsum.</p>
      <button class="get-quotes">get</button>
    </div>
    <div class="history quotes-block">
        <p class="quotes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, a.</p>
      <p class="author">Lorem, ipsum.</p>
      </div>
  </main>
</template>

<style>
  .title {
    font-size: 42px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    margin-bottom: 50px;
  }

  

  .quotes-block {
    width: 50%;
    background-color: #fff;
    margin: 0 auto 50px;
    border-radius: 10px;
    padding: 16px;
  }

 

  .quotes {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .author {
    text-align: right;
    margin-bottom: 8px;
  }

  .get-quotes {
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    padding: 5px 30px;
    border-radius: 10px;
    border: none;
    background-color: lightblue;
    box-shadow: 0px 3px 3px lightskyblue;
    transition: all 0.3s;
  }

  .get-quotes:hover {
    background-color: lightskyblue;
  }

  .get-quotes:active {
    box-shadow: none;
    transform: translateY(2px);
  }

  .history {
    background-color: lightgrey;
  }

  .history .quotes {
    font-size: 16px;
  }

  .history .author {
    font-size: 14px;
  }
</style>
