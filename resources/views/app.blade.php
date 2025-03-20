<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
         <!-- site Favicon -->
        <link rel="icon" href="{{ asset('assets/img/favicon/favicon.png') }}" sizes="32x32">

        <!-- css Icon Font -->
        <link rel="stylesheet" href="{{ asset('assets/css/vendor/gicons.css') }}">

        <!-- css All Plugins Files -->
        <link rel="stylesheet" href="{{ asset('assets/css/plugins/animate.css') }}">   
        <link rel="stylesheet" href="{{ asset('assets/css/plugins/swiper-bundle.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/plugins/owl.carousel.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/plugins/owl.theme.default.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/plugins/slick.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/plugins/nouislider.css') }}">

        <!-- Main Style -->
        <link rel="stylesheet" id="main_style" href="{{ asset('assets/css/home.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/responsive.css') }}">
        
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <script src="{{ asset('assets/js/plugins/jquery-3.7.1.min.js') }}"></script>
        <script src="{{ asset('assets/js/plugins/popper.min.js') }}"></script>
        <script src="{{ asset('assets/js/plugins/swiper-bundle.min.js') }}"></script>
        <script src="{{ asset('assets/js/plugins/fontawesome.js') }}"></script>
        <script src="{{ asset('assets/js/plugins/owl.carousel.min.js') }}"></script>
        <script src="{{ asset('assets/js/plugins/infiniteslidev2.js') }}"></script>
        <script src="{{ asset('assets/js/plugins/jquery.zoom.min.js') }}"></script>
        <script src="{{ asset('assets/js/plugins/slick.min.js') }}"></script>
        <script src="{{ asset('assets/js/plugins/nouislider.js') }}"></script>

        <!-- Main Js -->
        <script src="{{ asset('assets/js/main.js') }}"></script>
        <script src="{{ asset('assets/js/home.js') }}"></script>
    </body>
</html>
