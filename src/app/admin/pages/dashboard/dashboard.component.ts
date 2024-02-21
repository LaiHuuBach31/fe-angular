import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    ngOnInit(): void {
    }
    customOptions: OwlOptions = {
        loop: true,
        // autoplay: true,
        center: true,
        dots: false,
        autoHeight: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 5,
            },
            1000: {
                items: 7,
            },
        },
    };

    LogoCategory = [
        { image: 'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889' },
        { image: 'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334' },
        { image: 'https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f' },
        { image: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d' },
        { image: 'https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d' },
        { image: 'https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52' },
        { image: 'https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52' },
        { image: 'https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52' },
    ]

}
