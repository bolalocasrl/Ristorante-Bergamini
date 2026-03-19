import re

with open('client/src/pages/home.tsx', 'r') as f:
    content = f.read()

old_block = """            {/* Center: New Transparent Logo (Overhanging) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
               <a href="#" className="pointer-events-auto block">
                 <img 
                   src={logoImage} 
                   alt="Antica Drogheria Bergamini Duilio Logo" 
                   className="h-28 md:h-36 w-auto object-contain drop-shadow-2xl" 
                 />
               </a>
            </div>"""

new_block = """            {/* Center: New Transparent Logo (Overhanging) */}
            <div className="flex items-center justify-center h-full z-50">
               <a href="#" className="block h-full flex items-center py-1">
                 <img 
                   src={logoImage} 
                   alt="Antica Drogheria Bergamini Duilio Logo" 
                   className="max-h-[85%] w-auto object-contain drop-shadow-2xl" 
                 />
               </a>
            </div>"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open('client/src/pages/home.tsx', 'w') as f:
        f.write(content)
    print("Replaced successfully")
else:
    print("Block not found")
