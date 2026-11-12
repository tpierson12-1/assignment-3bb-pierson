# Project Setup & Execution Instructions

    node.js runtime version: 11.19.0
    package manager: assignment-3bb-pierson

    commands: npm create vite@latest assignment-3bb-pierson
              Select a framework: React
              Select a variant: JavaScript + React Compiler
              Which linter to use? ESLint
              Install with npm and start now? Yes
              npm run dev to boot the server
              Local: http://localhost:5173/ (assignment-3bb-pierson)

    For my project setup, I created an folder in my file explorer then booted up vs code to open the folder. I clicked on my git bash terminal inside vs code so I can create my react project. Once my react project was completed then I decided to test it by running npm run dev to boot up the demo site. After testing I initialized a git repo for my react project.

# React Component Hierarchy & State Flow Architecture

<`App /> (User : cart[Array] isOpen[Boolean])
    <`Navbar> (Logo, Genre Links, Cart badge displaying the item count)
<`Routes>
        <`Route path ="/" element={<`CatalogAlbum albums={ALBUMS} onAddToCart={handleAddToCart}/>`}`/> 
        (This displays the albums on the catalog)
        <`Route path="/album/:albumId" element={<`AlbumGenrePage albums={ALBUMS} onAddToCart={handleAddToCart}/>`}` /> 
        (Albums will have a description when it's being clicked)
        <`Route path="/checkout" element={<`CheckoutAlbum cart={cart} onClearCart={handleClearCart}/>`}`>
        (Checkout page will display the albums being in cart and have an option to remove all the albums in the cart)
    <`Routes/>

    <`CartDrawer> (cart={Array}, isOpen{Boolean}, onClose={Boolean} onUpdateQuantity={.map()} onRemove={.filer()})
