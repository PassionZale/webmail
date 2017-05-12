<template>
    <div class="mdui-toolbar mdui-color-theme">
        <a @click.prevent="goBack" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">&#xe5c4;</i></a>
        <span class="mdui-typo-title">邮件详情</span>
    </div>
    <div class="mdui-panel" id="panel">
        <div class="mdui-panel-item" id="panel-subject">
            <div class="mdui-panel-item-header">
                <div class="mdui-panel-item-title">主题</div>
                <div class="mdui-panel-item-summary">当前很多无线页面都使用前端模板进行数据渲染，那么在糟糕的网速情况下，一进去页面，看到的不是白屏就是 loading，这成为白屏问题。</div>
                <i class="mdui-panel-item-arrow mdui-icon material-icons">&#xe313;</i>
            </div>
            <div class="mdui-panel-item-body">
                <p>
                    当前很多无线页面都使用前端模板进行数据渲染，那么在糟糕的网速情况下，一进去页面，看到的不是白屏就是 loading，这成为白屏问题。
                </p>
                <div class="mdui-panel-item-actions">
                    <button id="close-subject" class="mdui-btn mdui-ripple">收起</button>
                </div>
            </div>
        </div>
        <div class="mdui-panel-item" id="panel-from">
            <div class="mdui-panel-item-header">
                <div class="mdui-panel-item-title">发件人(20)</div>
                <div class="mdui-panel-item-summary">05-10 19:20</div>
                <i class="mdui-panel-item-arrow mdui-icon material-icons">&#xe313;</i>
            </div>
            <div class="mdui-panel-item-body">
                <p v-for="i in 20">{{ i + '@tomonline-inc.com'}}</p>
                <div class="mdui-panel-item-actions">
                    <button id="close-from" class="mdui-btn mdui-ripple">收起</button>
                </div>
            </div>
        </div>
        <div class="mdui-panel-item" id="panel-to">
            <div class="mdui-panel-item-header">
                <div class="mdui-panel-item-title">抄送人(1)</div>
                <i class="mdui-panel-item-arrow mdui-icon material-icons">&#xe313;</i>
            </div>
            <div class="mdui-panel-item-body">
                <p>zhanglei@tomonline-inc.com</p>
                <div class="mdui-panel-item-actions">
                    <button id="close-to" class="mdui-btn mdui-ripple">收起</button>
                </div>
            </div>
        </div>
    </div>
    <div class="mdui-container">
        <div class="mdui-typo">
            <h4 class="doc-article-title">邮件排版示例 <a class="doc-anchor" id="demo"></a></h4>
        </div>
        <div class="mdui-typo">
            <h3>中文文章排版实例：论语学而篇第一</h3>
            <p>
                <small><b>作者：</b><abbr title="名丘，字仲尼">孔子</abbr>（
                    <time>前551年9月28日－前479年4月11日</time>
                    ）
                </small>
            </p>
            <h4>本篇引语</h4>
            <p>《学而》是《论语》第一篇的篇名。《论语》中各篇一般都是以第一章的前二三个字作为该篇的篇名。《学而》一篇包括16章，内容涉及诸多方面。其中重点是「吾日三省吾身」；「节用而爱人，使民以时」；「礼之用，和为贵」以及仁、孝、信等道德范畴。 </p>
            <h4>原文</h4>
            <p>子曰：「学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知，而不愠，不亦君子乎？」 </p>
            <h4>译文</h4>
            <p>孔子说：「学了又时常温习和练习，不是很愉快吗？有志同道合的人从远方来，不是很令人高兴的吗？人家不了解我，我也不怨恨、恼怒，不也是一个有德的君子吗？」 </p>
            <h4>评析</h4>
            <p>宋代著名学者<u>朱熹</u>对此章评价极高，说它是「入道之门，积德之基」。本章这三句话是人们非常熟悉的。历来的解释都是：学了以后，又时常温习和练习，不也高兴吗等等。三句话，一句一个意思，前后句子也没有什么连贯性。但也有人认为这样解释不符合原义，指出这里的「学」不是指学习，而是指学说或主张；「时」不能解为时常，而是时代或社会的意思，「习」不是温习，而是使用，引申为采用。而且，这三句话不是孤立的，而是前后相互连贯的。这三句的意思是：自己的学说，要是被社会采用了，那就太高兴了；退一步说，要是没有被社会所采用，可是很多朋友赞同<abbr title="张燕婴">我</abbr>的学说，纷纷到我这里来讨论问题，我也感到快乐；再退一步说，即使社会不采用，人们也不理解我，我也不怨恨，这样做，不也就是君子吗？（见《齐鲁学刊》1986年第6期文）这种解释可以自圆其说，而且也有一定的道理，供读者在理解本章内容时参考。</p>
            <p>此外，在对「人不知，而不愠」一句的解释中，也有人认为，「人不知」的后面没有宾语，人家不知道什么呢？当时因为孔子有说话的特定环境，他不需要说出知道什么，别人就可以理解了，却给后人留下一个谜。有人说，这一句是接上一句说的，从远方来的朋友向我求教，我告诉他，他还不懂，我却不怨恨。这样，「人不知」就是「人家不知道我所讲述的」了。这样的解释似乎有些牵强。</p>
            <p>总之，本章提出以学习为乐事，做到人不知而不愠，反映出孔子学而不厌、诲人不倦、注重修养、严格要求自己的主张。这些思想主张在《论语》书中多处可见，有助于对第一章内容的深入了解。</p>
        </div>
        <div class="mdui-typo">
            <h3>英文文章排版实例</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.</p>
            <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </blockquote>
            <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

            <h4>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h4>List style in action</h4>
            <ul>
                <li>If you wish to succeed, you should use persistence as your good friend, experience as your reference, prudence as
                    your brother and hope as your sentry.
                    <p>如果你希望成功，当以恒心为良友，以经验为参谋，以谨慎为兄弟，以希望为哨兵。</p>
                </li>
                <li>Sometimes one pays most for the things one gets for nothing.
                    <p>有时候一个人为不花钱得到的东西付出的代价最高。</p>
                </li>
                <li>Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things
                    easily.
                    <p>只有有耐心圆满完成简单工作的人，才能够轻而易举的完成困难的事。</p>
                </li>
            </ul>
            <h4>You may want to create a perfect <code>&lt;hr /&gt;</code> line, despite the fact that there will never have one
            </h4>
            <hr/>
            <p><abbr title="法国作家罗切福考尔德">La Racheforcauld</abbr> said:
                <mark>"Few things are impossible in themselves; and it is often for want of will, rather than of means, that man fails
                    to succeed".
                </mark>
                You just need to follow the browser's behavior, and set a right <code>margin</code> to it。it will works nice as the
                demo you're watching now. The following code is the best way to render typo in Chinese:
            </p>
        </div>
    </div>

    <div class="mdui-fab-wrapper" id="fab">
        <button class="mdui-fab mdui-ripple mdui-color-theme" id="fab-toggle-btn">
            <!-- 默认显示的图标 -->
            <i class="mdui-icon material-icons">&#xe5d2;</i>
            <!-- 在拨号菜单开始打开时，平滑切换到该图标，若不需要切换图标，则可以省略该元素 -->
            <i class="mdui-icon mdui-fab-opened material-icons">&#xe5cd;</i>
        </button>
        <div class="mdui-fab-dial">
            <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-pink"><i class="mdui-icon material-icons">&#xe864;</i></button>
            <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-red"><i class="mdui-icon material-icons">&#xe866;</i></button>
            <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-orange"><i class="mdui-icon material-icons">&#xe191;</i></button>
            <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-blue"><i class="mdui-icon material-icons">&#xe913;</i></button>
        </div>
    </div>

</template>

<script>
    export default {
        ready() {
            let panel = new mdui.Panel('#panel');
            document.getElementById('close-from').addEventListener('click', () => {
                panel.toggle('#panel-from');
            });
            document.getElementById('close-to').addEventListener('click', () => {
                panel.toggle('#panel-to');
            });
            document.getElementById('close-subject').addEventListener('click', () => {
                panel.toggle('#panel-subject');
            });
            let fab = new mdui.Fab('#fab');
            document.getElementById('fab-toggle-btn').addEventListener('click', function () {
                let fab_state = fab.getState();
                if(fab_state == 'opened'){
                    fab.close();
                }else{
                    fab.open();
                }
            });
        },
        methods: {
            goBack() {
                const redirect = decodeURIComponent(this.$route.query.redirect || '/');
                this.$route.router.go(redirect);
            }
        }
    }
</script>
