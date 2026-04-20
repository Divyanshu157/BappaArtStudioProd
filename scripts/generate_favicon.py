from PIL import Image

logo_path = 'public/assets/images/logo.png'
icon_path = 'public/favicon.ico'
img = Image.open(logo_path)
sz = max(img.width, img.height)
bg = Image.new('RGBA', (sz, sz), (255, 255, 255, 0))
bg.paste(img, ((sz - img.width) // 2, (sz - img.height) // 2), img.convert('RGBA'))
bg.save(icon_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
print('generated', icon_path)
