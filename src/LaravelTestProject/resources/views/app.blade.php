<!DOCTYPE html>
<html class="dark" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>ToDo App</title>

  <!-- Fonts -->

  <!-- Vue -->
  @vite(['resources/js/app.js','resources/css/app.css'])

  <!-- Styles -->
  <style>
  </style>


</head>

<body class="bg-gray-800">
  <div id="app">
  </div>
</body>

</html>