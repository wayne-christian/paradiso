// JavaScript Document
var text = ` The glory of Him who moveth everything
 Doth penetrate the universe, and shine
 In one part more and in another less.

 Within that heaven which most his light receives
 Was I, and things beheld which to repeat
 Nor knows, nor can, who from above descends;

 Because in drawing near to its desire
 Our intellect ingulphs itself so far,
 That after it the memory cannot go.

 Truly whatever of the holy realm
 I had the power to treasure in my mind
 Shall now become the subject of my song.

 O good Apollo, for this last emprise
 Make of me such a vessel of thy power
 As giving the beloved laurel asks!

 One summit of Parnassus hitherto
 Has been enough for me, but now with both
 I needs must enter the arena left.

 Enter into my bosom, thou, and breathe
  As at the time when Marsyas thou didst draw
  Out of the scabbard of those limbs of his.

 O power divine, lend'st thou thyself to me
  So that the shadow of the blessed realm
  Stamped in my brain I can make manifest,

 Thou'lt see me come unto thy darling tree,
  And crown myself thereafter with those leaves
  Of which the theme and thou shall make me worthy.

 So seldom, Father, do we gather them
  For triumph or of Caesar or of Poet,
  (The fault and shame of human inclinations,)

 That the Peneian foliage should bring forth
  Joy to the joyous Delphic deity,
  When any one it makes to thirst for it.

  A little spark is followed by great flame;
  Perchance with better voices after me
  Shall prayer be made that Cyrrha may respond!

 To mortal men by passages diverse
  Uprises the world's lamp; but by that one
  Which circles four uniteth with three crosses,

 With better course and with a better star
  Conjoined it issues, and the mundane wax
  Tempers and stamps more after its own fashion.

 Almost that passage had made morning there
  And evening here, and there was wholly white
  That hemisphere, and black the other part,

 When Beatrice towards the left-hand side
  I saw turned round, and gazing at the sun;
  Never did eagle fasten so upon it!

 And even as a second ray is wont
  To issue from the first and reascend,
  Like to a pilgrim who would fain return,

  Thus of her action, through the eyes infused
  In my imagination, mine I made,
  And sunward fixed mine eyes beyond our wont.

 There much is lawful which is here unlawful
  Unto our powers, by virtue of the place
  Made for the human species as its own.

 Not long I bore it, nor so little while
  But I beheld it sparkle round about
  Like iron that comes molten from the fire;

 And suddenly it seemed that day to day
  Was added, as if He who has the power
  Had with another sun the heaven adorned.

 With eyes upon the everlasting wheels
  Stood Beatrice all intent, and I, on her
  Fixing my vision from above removed,

Such at her aspect inwardly became
  As Glaucus, tasting of the herb that made him
  Peer of the other gods beneath the sea.

 To represent transhumanise in words
  Impossible were; the example, then, suffice
  Him for whom Grace the experience reserves.

 If I was merely what of me thou newly
  Createdst, Love who governest the heaven,
  Thou knowest, who didst lift me with thy light!

 When now the wheel, which thou dost make eternal
  Desiring thee, made me attentive to it
  By harmony thou dost modulate and measure,

 Then seemed to me so much of heaven enkindled
  By the sun's flame, that neither rain nor river
  E'er made a lake so widely spread abroad.

 The newness of the sound and the great light
  Kindled in me a longing for their cause,
  Never before with such acuteness felt;

Whence she, who saw me as I saw myself,
  To quiet in me my perturbed mind,
  Opened her mouth, ere I did mine to ask,

 And she began: "Thou makest thyself so dull
  With false imagining, that thou seest not
  What thou wouldst see if thou hadst shaken it off.

 Thou art not upon earth, as thou believest;
  But lightning, fleeing its appropriate site,
  Ne'er ran as thou, who thitherward returnest."

 If of my former doubt I was divested
  By these brief little words more smiled than spoken,
  I in a new one was the more ensnared;

 And said: "Already did I rest content
  From great amazement; but am now amazed
  In what way I transcend these bodies light."

 Whereupon she, after a pitying sigh,
  Her eyes directed tow'rds me with that look
  A mother casts on a delirious child;

 And she began: "All things whate'er they be
  Have order among themselves, and this is form,
  That makes the universe resemble God.

 Here do the higher creatures see the footprints
  Of the Eternal Power, which is the end
  Whereto is made the law already mentioned.

 In the order that I speak of are inclined
  All natures, by their destinies diverse,
  More or less near unto their origin;

 Hence they move onward unto ports diverse
  O'er the great sea of being; and each one
  With instinct given it which bears it on.

 This bears away the fire towards the moon;
  This is in mortal hearts the motive power
  This binds together and unites the earth.

 Nor only the created things that are
  Without intelligence this bow shoots forth,
  But those that have both intellect and love.

 The Providence that regulates all this
  Makes with its light the heaven forever quiet,
  Wherein that turns which has the greatest haste.

 And thither now, as to a site decreed,
  Bears us away the virtue of that cord
  Which aims its arrows at a joyous mark.

 True is it, that as oftentimes the form
  Accords not with the intention of the art,
  Because in answering is matter deaf,

 So likewise from this course doth deviate
  Sometimes the creature, who the power possesses,
  Though thus impelled, to swerve some other way,

 (In the same wise as one may see the fire
  Fall from a cloud,) if the first impetus
  Earthward is wrested by some false delight.

 Thou shouldst not wonder more, if well I judge,
  At thine ascent, than at a rivulet
  From some high mount descending to the lowland.

 Marvel it would be in thee, if deprived
  Of hindrance, thou wert seated down below,
  As if on earth the living fire were quiet."
 Thereat she heavenward turned again her face.`;


var wordsArray = text.split(' ');
var speed = 40000;
var watchid, target, options;
var timer = null;
var count = 0;
//avg 250 words a minute
var readingspeed = 250 / 60;

target = {
  latitude: 53.234477,
  longitude: -0.535973
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};


$(function () {

  watchid = navigator.geolocation.watchPosition(success, error, options);


});


function calcdistance(lat1, lon1, lat2, lon2, unit) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  } else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344
    }
    if (unit == "N") {
      dist = dist * 0.8684
    }
    return dist;
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error, options);
  } else {
    $('#distance').text = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude
    + "<br>Longitude: " + position.coords.longitude);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function success(pos) {
  var crd = pos.coords;
  var lat1 = crd.latitude;
  var lon1 = crd.longitude;

  var distance = calcdistance(lat1, lon1, 53.234477, -0.535973, 'K');
	speed = 400 * Number(distance).toFixed(2);
  console.log(lat1, lon1, 'dist ', distance.toFixed(2));
  $('#distance').text("Distance: " + distance.toFixed(2) + " km / Word speed: "+(speed/100 *60).toFixed(0)+" wpm");
  
  console.log(lat1, lon1, 'dist ', distance, 'speed ', speed);

  clearInterval(timer);

  timer = setInterval(function () {
    count++;
    /*$("#word").fadeOut(400, function () {
    $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });*/
    $("#word").text(wordsArray[count % wordsArray.length]).fadeIn(400);
	
  }, speed);


  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulations, you reached the target');
    navigator.geolocation.clearWatch(id);
  }
}
