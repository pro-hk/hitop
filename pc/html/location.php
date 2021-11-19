<? include("../include/header.html"); ?>
<main id="subContentsWarp">
  <div id="subVisual" class="subVisual01">
    <div class="subTitle">
      <h2>Company</h2>
      <p>우리는, 도시경관사업의 최고기업이 되고 시장을 선도한다!</p>
    </div>
    <nav id="lnb">
      <h3 class="hidden">local navigation bar</h3>
      <div class="contents">
        <div class="home">
          <a href=""><span class="material-icons"> home </span></a>
        </div>
        <div class="depth01 item">
          <button>
            Company
            <span class="material-icons">expand_more</span>
          </button>
          <ul>
            <li><a href="">Company</a></li>
            <li><a href="">Busniess</a></li>
            <li><a href="">PR</a></li>
            <li><a href="notice.html">Customer</a></li>
            <li><a href="">Recruit</a></li>
          </ul>
        </div>
        <div class="depth02 item">
          <button>
            오시는 길
            <span class="material-icons">expand_more</span>
          </button>
          <ul>
            <li><a href="">사업개요</a></li>
            <li><a href="">인사말</a></li>
            <li><a href="">경영이념</a></li>
            <li><a href="history.html">회사연혁</a></li>
            <li><a href="">CI</a></li>
            <li><a href="">조직도</a></li>
            <li><a href="location.html">오시는 길</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <!-- subVisual end -->
  <div id="subContents">
    <h3 class="subTitle">오시는길</h3>
    <div class="contents">
      <div class="tabBox">
        <div class="tabMenu">
          <ul>
            <li class="on">서울 사무실</li>
            <li>강원도 사무실</li>
            <li>제 1 공장</li>
            <li>제 2 공장</li>
          </ul>
        </div>
        <div class="tabContents">
          <div id="map"></div>
        </div>
      </div>
    </div>
  </div>
</main>
<script src="../js/map.js"></script>
<? include("../include/footer.html"); ?>

<!-- 링크에 웹이 처리할 수 있는 파일 경로선택시 바로 열림 -->
<!-- 다운로드하고 싶을 땐, download 기재 -->
