$(document).ready(function() {

	$("#next-quote").on("click", function(e) {
		$("#quote").hide();
		$("#quote").fadeIn();
		e.preventDefault();

		var randomQuoteNumber = getRandomQuoteNumber();

		updateQuote(randomQuoteNumber);

	});

	var q = location.search.split("?q=")[1];

	if (q >= 0 && q < quotes.length) {

		updateQuote(q);

	} else {

		$("#next-quote").click();

	}

});

function updateQuote(quoteNumber) {
	var randomQuote = quotes[quoteNumber];

	$("#quote").html(randomQuote.quote);
	$("#author").html(randomQuote.author);
	$("#quote-box")
			.removeClass()
			.addClass("animated bounceIn")
			.one(
					'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function() {
						$(this).removeClass();
					});

	$("#share").attr(
			"href",
			"https://twitter.com/intent/tweet?text=\""
					+ encodeURIComponent($("#hidden").html(randomQuote.quote)
							.text())
					+ "\" http://codepen.io/xgusth/full/OyeJLP?q="
					+ quoteNumber);

}

function getRandomQuoteNumber() {
	return Math.floor(Math.random() * quotes.length);

}

var quotes = [
		{

			"quote" : "\"They don't want you to eat breakfast\""
		},
		{
			"quote" : "\"Bless up.\""
		},
		{
			"quote" : "\"LION!\""
		},
		{
			"quote" : "\"You loyal.\""
		},
		{
			"quote" : "\"They don't want us to jet-ski!\""
		},
		{
			"quote" : "\"They don't want us to eat lunch; believe me. But we gon' eat!\""
		},
		{
			"quote" : "\"They never said winning was easy.\""
		},
		{
			"quote" : "\"Some people can't handle success- I can. I know what it comes with; some people can't handle it - I can.\""
		},
		{
			"quote" : "\"The key to more success is using the right soap; I only use Dove. Dove soap. Trust me.\""
		},
		{
			"quote" : "\"Cocoa butter is the key.\""
		},
		{
			"quote" : "\"They will try to close the door on you. Just open it.\""
		},
		{
			"quote" : "\"Another one. Another one. Another one.\""
		},
		{
			"quote" : "\"LION! King of the jungle.\""
		},

		{
			"quote" : "\"In life there will roadblocks, but we will overcome it.\""
		},
		{
			"quote" : "\"We the best.\""
		},
		{
			"quote" : "\"The other day the grass was brown. Now it's green because I ain't give up. Never surrender\""
		},
		{
			"quote" : "\"Don't ever play yourself.\""
		},
		{
			"quote" : "\" I promise you they don't want you to have breakfast.\""
		},
		{
			"quote" : "\"I eat three of these vitamin gummies every day. Trust me, this is a major key.\""
		},
		{
			"quote" : "\"You know they don't want you to eat breakfast, so what we gon' do is eat breakfast.\""
		},
		{
			"quote" : "\"Good morning. Bless up.\""
		},
		{
			"quote" : "\"Keep your face clean.\""
		},
		{
			"quote" : "\"This is what I love doing, waterin' my plants. It's relaxin'. It's a blessin'. It's a part of my success. Trust me.\""
		},
		{
			"quote" : "\"It's important to water your plants.\""
		},
		{
			"quote" : "\"LION ORDER!\""
		},
		{
			"quote" : "\"Stay focused.\""
		},
		{
			"quote" : "\"The key to more success is to get a massage once a week. Very important. Major key.\""
		},
		{
			"quote" : "\"To succeed, you must believe. When you believe, you will succeed.\""
		},
		{
			"quote" : "\"The key to success is to keep your head above the water. Never give up.\""
		},
		{
			"quote" : "\"The key to more success is cocoa butter. Why not live smooth? Why live rough?\""
		},
		{
			"quote" : "\"Once a week - manicure and pedicure. Once a week. Major key to success.\""
		},
		{
			"quote" : "\"You a genius.\""
		},
		{
			"quote" : "\"You smart.\""
		},
		{
			"quote" : "\"I appreciate you.\""
		},
		{
			"quote" : "\"Wise up. Rise up. Bless up.\""
		},
		{
			"quote" : "\"I changed a lot.\""
		},
		{
			"quote" : "\"Watch your back, but more importantly, when you get out the shower, dry your back. It's a cold world out there.\""
		},
		{
			"quote" : "\"Another one. Another one. Another one.\""
		},
		{
			"quote" : "\"Keep your hands clean. Keep your face clean. The key to more success.\""
		},
		{
			"quote" : "\"In life, they have many directions. I choose to go up. Way up. Bless up.\""
		},
		{
			"quote" : "\"I changed a lot.\""
		},
		{
			"quote" : "\"Enjoy life 'cuz they don't want you to enjoy it. So, really enjoy it.\""
		},
		{
			"quote" : "\"Look how beautiful life is. Don't let anybody pull you down, do what you want. Live life.\""
		},
		{
			"quote" : "\"You do know they don't want you to eat at all. They want you to be miserable, so we gon' live.\""
		},
		{
			"quote" : "\"The key is to enjoy life 'cuz they don't want you to enjoy life, I promise you. They don't you to jet ski, they don't want you to smile.\""
		},
		{
			"quote" : "\"The key is to keep all jealous people away from you. They're the most dangerous ones. They're jealous.\""
		},
		{
			"quote" : "\"The key is to drink coconut. Fresh coconut. Trust me.\""
		}, {
			"quote" : "\"Coconut water is so good for. Amazing.\""
		}, {
			"quote" : "\"Ride with me on the journey to more success.\""
		}, {
			"quote" : "\"Be a star. Be a superstar.\""
		}, {
			"quote" : "\"Life is a like a hammock; it swings back and forth, back and forth. Stay focused.\""
		}, {
			"quote" : "\"The key is to find happiness. And when you find happiness, embrace it 'cuz they don't want you to have joy.\""
		}, {
			"quote" : "\"You must have your vitamins. Big key to success.\""
		}]