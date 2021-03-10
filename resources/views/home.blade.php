@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
    
            <div class="container">
  
                <section class="panel panel-default">
              <div class="panel-heading"> 
              <h3 class="panel-title">Add New Product</h3> 
              </div> 
              <div class="panel-body">
                
              <form action="{{route('addproduct')}}" method="POST" enctype="multipart/form-data" class="form-horizontal" role="form">
                  @csrf

                <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">product title</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" name="title" id="title" placeholder="title">
                  </div>
                </div> <!-- form-group // -->
                <div class="form-group">
                  <label for="about" class="col-sm-3 control-label">description</label>
                  <div class="col-sm-9">
                    <textarea name="description" class="form-control"></textarea>
                  </div>
                </div> <!-- form-group // -->
<!--                        upload image                    -->                            
                <br />
                <br />
                <span class="head">Upload Button Re-Imagined</span>
                <br />
                <br />
            
                <div class="fileUpload blue-btn btn width100">
                  <span>Upload product image</span>
                  <input type="file" name="image"  class="uploadlogo" />
                </div>

<!--            //// upload image                    -->
                <hr>
                <div class="form-group">
                  <div class="col-sm-offset-3 col-sm-9">
                    <button type="submit" class="btn btn-primary">   -- Go --   </button>
                  </div>
                </div> <!-- form-group // -->
              </form>
                
              </div><!-- panel-body // -->
              </section><!-- panel// -->
              
                
              </div> <!-- container// -->

        </div>
    </div>
</div>
@endsection

