//  --------------------------------
// 375px viewport fixed ------------
//  --------------------------------
const switchViewport = () => {
	const viewport = document.querySelector('meta[name="viewport"]');
	const value =
		window.outerWidth > 375 ? "width=device-width,initial-scale=1" : "width=375";
	if (viewport.getAttribute("content") !== value) {
		viewport.setAttribute("content", value);
	}
};
const addResizeListener = () => {
	window.addEventListener("resize", switchViewport, false);
};

switchViewport();
addResizeListener();

//  --------------------------------
// smooth scroll -------------------
//  --------------------------------
const smoothScroll = () => {
	const h = document.querySelector("header");
	gsap.utils.toArray('a[href^="#"]').forEach(function (a) {
		a.addEventListener("click", function (e) {
			e.preventDefault();
			gsap.to(window, {
				duration: 1,
				ease: "power2.out",
				scrollTo: {
					y: e.target.getAttribute("href"),
					autoKill: false,
					offsetY: h.offsetHeight, //ヘッダーの高さをセット
				},
			});
		});
	});
};
smoothScroll();

// scroll top
$(function () {
	let pagetop = $(".pagetop");
	let scrollHeight;
	let scrollPosition;
	let footHeight;
	let w = $(window).width();
	$(window).scroll(function () {
		scrollHeight = $(document).height();
		scrollPosition = $(window).height() + $(window).scrollTop();
		footHeight = $("footer").outerHeight();
		if (scrollHeight - scrollPosition <= footHeight) {
			pagetop.addClass("abs");
		} else {
			pagetop.removeClass("abs");
		}
		if ($(this).scrollTop() < 200) {
			pagetop.removeClass('active');
		} else {
			pagetop.addClass('active');
		}
	});

	$('.pagetop').on('click', function (event) {
		event.preventDefault(); // リンクのデフォルト動作を無効にする
		$('html, body').animate({
			scrollTop: 0
		}, 1000); // ページトップにスムーズにスクロール
	});

});

$(function () {
	const $animation = $('.icon-animation');
	$animation.on('click', function () {
		$(".overlay").stop().fadeToggle();
		if ($(this).hasClass('is-open')) {
			$(this).removeClass('is-open');
			$("html").css("overflow", "auto");
			$("nav").toggleClass("open");
		} else {
			$(this).addClass('is-open');
			$("html").css("overflow", "hidden");
			$("nav").toggleClass("open");
		}
	});
	$("nav a").on("click", function () {
		$animation.removeClass('is-open');
		$("html").css("overflow", "auto");
		$("nav").toggleClass("open");
	});
});