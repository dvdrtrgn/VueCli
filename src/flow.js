import $ from 'jquery';

function Flow(myVue) {
  const Con = new myVue.$scrollmagic.Controller();
  const rewind = !true;

  function sectionAni() {
    let def = {
      scene: {
        offset: -222,
        reverse: rewind,
        triggerElement: this,
      },
    };
    def.scene = new myVue.$scrollmagic.Scene(def.scene);
    Con.addScene(def.scene.setClassToggle(this, 'ani'));
  }

  function flowChart(ele, num) {
    let def = {
      scene: {
        offset: -111,
        reverse: rewind,
        triggerElement: ele,
      },
      tween: {
        delay: 1.5,
        ease: myVue.$gsap.Bounce.easeOut,
        strokeDashoffset: num,
      },
    };

    def.scene = new myVue.$scrollmagic.Scene(def.scene);
    def.tween = myVue.$gsap.TweenMax.to(ele, 1, def.tween);
    Con.addScene(def.scene.setTween(def.tween));
  }

  setTimeout(function() {
    flowChart('.tooth .chart svg .line-fill', 250);
    $('section').each(sectionAni);
    // $('.flow').addClass('ini');
  }, 1999);
}

export default Flow;
