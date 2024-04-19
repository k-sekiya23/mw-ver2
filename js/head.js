'use strict';
{
  document.write(`
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>みつばち助産院</title>
      <meta name="description" content="みつばち助産院は大阪府枚方市にある出張型助産院です。子育てを孤育てにしない、家族の『和』を大切にしたいそんな想いで皆さまと同じ目線で歩みたい" />

      <!-- reset.css destyle -->
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"
      />
      <link rel="stylesheet" href="CSS/common.css">
      <link rel="stylesheet" href="style.css">
      <link rel="icon" href="img/header-logo.png">

      <script src="https://kit.fontawesome.com/470eab1a94.js" crossorigin="anonymous"></script>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <!-- jquery -->
      <script>
        // ロード時のヘッダーフェイドイン
        $(function () {
          $(window).scroll(function () {
            const wHeight = $(window).height();
            const scrollAmount = $(window).scrollTop();
            $(window).on('load', function(){
              $('.fadeInDown0').addClass('open');
            });
          });
        });
      </script>
    </head>
  `)
}