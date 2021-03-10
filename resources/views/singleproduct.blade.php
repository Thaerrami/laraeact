@extends('react')

@section('content')
<div class="container-fluid m-0 p-0 text-center">
    <input type="hidden" value={{$product->id}} id='id' >
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 ">
            <img width="100%" src="{{$product->img}}" class="m-0 p-0 rounded" alt="">
        </div>
        <div class="col-lg-8 col-md-6 col-sm-12 w-100 m-0 p-2">
            <div class="row m-0">
                <div class="col-lg-2 bg-light col-md-2 col-sm-12 p-3 m-0 rounded m-1"><span id='like'></span></div>
                <div class="col-lg-9 col-md-9 col-sm-12 p-3">{{$product->title}}</div>
            </div>
            <div class="text-center p-3">
                {{$product->description}}
            </div>
        </div>
    </div>
    
</div>
@endsection