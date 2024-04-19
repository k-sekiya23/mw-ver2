'use strict';
{
  document.write(`
    <header>
      <div class="header-wrapper fadeInDown0 updown">
        <div class="header-main">
          <div class="header-logo"><a href="index.html"><img src="img/header-logo.png" alt=""></a></div>
          <div class="header-title">
            <h1>みつばち助産院</h1>
          </div>
        </div>

        <div class="gnavi__wrap">
          <ul class="gnavi__lists">
            <li class="gnavi__list">
              <a href="index.html">ホーム</a>
              <ul class="dropdown__lists">
                <li class="dropdown__list"><a href="index.html#about">できること</a></li>
              </ul>
            </li>

            <li class="gnavi__list">
              <a href="prof.html">プロフィール</a>
              <ul class="dropdown__lists">
                <li class="dropdown__list"><a href="prof.html #prof">紹介</a></li>
                <li class="dropdown__list"><a href="prof.html#license">資格一覧</a></li>
              </ul>
            </li>

            <li class="gnavi__list">
              <a href="cost.html">サービス</a>
              <ul class="dropdown__lists">
                <li class="dropdown__list"><a href="cost.html">費用案内</a></li>
                <li class="dropdown__list"><a href="cost.html#about-sub">相談案内</a></li>
                <li class="dropdown__list"><a href="cost.html#coment">感想</a></li>
              </ul>
            </li>

            <li class="gnavi__list">
              <a href="contact.html">お問い合わせ</a>
            </li>
          </ul>
        </div>

        <div class="sp-menu">
          <span class="material-icons" id="open">menu</span>
        </div>
      </div>
    </header>

    <div class="overlay">
      <span class="material-icons" id="close">close</span>
      <nav>
        <ul>
          <li><a href="index.html">ホーム</a></li>
          <li><a href="prof.html">プロフィール</a></li>
          <li><a href="cost.html">サービス</a></li>
          <li><a href="contact.html">お問い合わせ</a></li>
        </ul>
      </nav>
    </div>
  `);
}