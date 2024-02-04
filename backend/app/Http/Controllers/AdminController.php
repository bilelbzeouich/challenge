<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    // Article CRUD Methods

    public function indexArticles()
    {
        $articles = Article::all();
        return view('admin.articles.index', compact('articles'));
    }


    public function storeArticle(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'qte' => 'required|integer',
            'prix' => 'required|numeric',
            'image1' => 'nullable|string',
            'image2' => 'required|string',
            'image3' => 'required|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        // Create the article
        $article = Article::create($validatedData);

        // Redirect with success message
        return redirect()->route('articles.show', $article->id)->with('success', 'Article created successfully');
    }


    public function updateArticle(Request $request, Article $article)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'qte' => 'required|integer',
            'prix' => 'required|numeric',
            'image1' => 'nullable|string',
            'image2' => 'required|string',
            'image3' => 'required|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        // Update the article
        $article->update($validatedData);

        // Redirect with success message
        return redirect()->route('articles.show', $article->id)->with('success', 'Article updated successfully');
    }

    public function destroyArticle(Article $article)
    {
        // Delete the article
        $article->delete();

        // Redirect with success message
        return redirect()->route('articles.index')->with('success', 'Article deleted successfully');
    }
}