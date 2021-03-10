<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use PHPUnit\Util\Json;
use Symfony\Component\Console\Input\Input;

class ProductController extends Controller
{
    public function addProdutview(){
        return view('home');
    }

    public function addProdut(Request $request):int{
        if (isset($request->image)) {
            //  Let's do everything here
            
                //
                $request->validate([
                    'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                  ]);

                   $img =$request->image->store('images', 'public');

                   Product::create([
                       'title'=>$request->title,
                       'description'=>$request->description,
                       'img'=>$img
                   ]);

                   return 202;
        }
        return 404;
    }


    public function deleteProduct($id){
        Product::where('id',$id)->delete();
    }

    public function updateProduct(Request $req, $id){
        
        $data=[];
        
        if (null !== request()->img) {
            //  Let's do everything here
                //
                $val=request()->validate([
                    'img' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                  ]);

                  if(!$val){
                      return 'error';
                  }

                   $img = request()->img->store('images', 'public');
                   $data['img']=$img;
        }

        if(request()->title !== null){
             $data['title']=request()->title;
        }
        
        if(request()->description !== null){
            $data['description']=request()->description;
        }

        Product::find($id)->update($data);

        return  $img ;
    }


    public function removeProduct($id){
        Product::find($id)->delete();
    }
    
    public function showAllProducts(){
        return view('products');
    }

    public function getAllProducts(){
        return response()->json(Product::all());
    }


    public function showProduct($id){
        return response()->json(Product::find($id)->get());
    }
    

///////////////like
public function likeProduct($id){
    $prod=Product::find($id);
    $prod->likes=$prod->likes+1;
    $prod->save();

    return response()->json($prod);
}
///////////////dislike
public function dislikeProduct($id){
    $prod=Product::find($id);
    $prod->likes=$prod->likes-1;
    $prod->save();

    return response()->json($prod);
}


public function getSingleProduct($id){
    $product=Product::where('id',$id);
    dd($product->get());

    return view('singleproduct')->with(['product'=>$product]);
}

}


