const product = require ("./model.products")
const productService  = {}

//create a product.
productService.createProduct = async ({ productName, productCode, img, MRP, sellingPrice }) => {
 
  const create = await product.create({productName, productCode, img, MRP, sellingPrice  });
  
    return create
  }

// //selling price and MRP.
//  productService.isSellingPriceValid = async (MRP,sellingPrice) => {
//   const isSellingPriceValid = await product.isSellingPriceValid({MRP,sellingPrice})
//   return isSellingPriceValid
//  }

// //get all products.
// productService.getAllProducts = async () => {
//   return await product.find()
// }

// //Get a single product by ID.
// productService.getProductById = async (productId) => {
//     return await product.findById(productId);
//   };
  
  
// // Update product details.
// productService.updateProduct = async (productId, updateData) => {
//   return await product.findByIdAndUpdate(productId, {updateData}, {
//     new: true,
//   });
// };

// //Delete product.
// productService.deleteProduct = async (productId) => {
//   return await product.findByIdandDelete(product)
// }


module.exports = productService