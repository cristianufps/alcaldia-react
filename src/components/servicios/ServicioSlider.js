import React from 'react';
import ServicioJSON from '../../jsons/servicio.json';

class ServicioSlider extends React.Component {
    constructor(props) {
        super(props);
    }
    itemsGroup(array) {
        let i = [];
        for (const [index, value] of array.entries()) {
            i.push(
                (
                    <li>
                        <h2><a href="#">Template License</a></h2>
                        <div class="article-info box">
                            <p class="f-right"><a href="#" class="comment">Comments (15)</a></p>
                            <p class="f-left">October 27, 2011 | Posted by <a href="#">John Doe</a> | Filed under <a href="#">templates</a>,
                                <a href="#">webdesign</a>, <a href="#">internet</a></p>
                        </div>
                        <p>This is a free web template by TemplatesDock. This work is distributed under the Creative Commons Attribution 3.0 License, which means that you are free to adapt, copy, distribute and transmit the work. You must attribute the work in the manner specified by the author or licensor (don´t remove our backlink from footer). This is a free web template by TemplatesDock. This work is distributed under the Creative Commons Attribution 3.0 License, which means that you are free to adapt, copy, distribute and transmit the work. You must attribute the work in the manner specified by the author or licensor (don´t remove our backlink from footer).</p>
                        <p><img src={`https://picsum.photos/200/300?random=${index}`} alt="" class="f-left" />Suspendisse posuere, metus eget pharetra adipiscing, arcu velit lobortis augue, quis pharetra mauris ante a velit. Duis feugiat, odio a mattis gravida, velit est euismod urna, vitae gravida elit turpis sit amet elit. Phasellus ac hendrerit tortor. Aliquam erat volutpat. Donec laoreet viverra sapien et luctus. Cras fringilla commodo nulla sit amet congue. Donec aliquam gravida elit, in fringilla urna adipiscing in. Sed vel risus id urna luctus eleifend. Morbi ut fringilla magna. Curabitur lobortis molestie tellus ac ultricies. Maecenas tempus rutrum mauris in auctor. Ut interdum diam a justo malesuada dignissim. Morbi blandit odio sed magna rhoncus tincidunt. Etiam diam neque, ornare in molestie posuere, vulputate a nisl. Donec dictum, erat vel varius ullamcorper, lorem ipsum vulputate eros, sit amet lacinia orci arcu ac mi. Cras pellentesque, lacus vel laoreet tristique, justo magna convallis ante, at pellentesque ligula sapien sit amet elit. Nulla ut nunc libero.</p>
                        <p>This is a free web template by TemplatesDock. This work is distributed under the Creative Commons Attribution 3.0 License, which means that you are free to adapt, copy, distribute and transmit the work. You must attribute the work in the manner specified by the author or licensor (don´t remove our backlink from footer). This is a free web template by TemplatesDock. This work is distributed under the Creative Commons Attribution 3.0 License, which means that you are free to adapt, copy, distribute and transmit the work. You must attribute the work in the manner specified by the author or licensor (don´t remove our backlink from footer).</p>
                        <p>This is a free web template by TemplatesDock. This work is distributed under the Creative Commons Attribution 3.0 License, which means that you are free to adapt, copy, distribute and transmit the work. You must attribute the work in the manner specified by the author or licensor (don´t remove our backlink from footer).</p>
                        <p class="more"><a href="#">Read more &raquo;</a></p>
                    </li>
                )
            );
        }
        return i;
    }

    render() {
        return (
            <div id="content">
                <ul class="articles box">
                    {this.itemsGroup(ServicioJSON.tramites)}
                </ul>
                <div class="pagination box">
                    <p class="f-right"> <a href="#" class="current">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">5</a> <a href="#">6</a> <a href="#">7</a> <a href="#">Next &raquo;</a> </p>
                    <p class="f-left">Page 1 of 13</p>
                </div>
            </div>
        );
    }
}

export default ServicioSlider;