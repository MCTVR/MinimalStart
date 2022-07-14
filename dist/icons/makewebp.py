import cv2

img = cv2.imread('./HK.webp')

scale = 0.5
width = int(img.shape[1] * scale)
height = int(img.shape[0] * scale)

dim = (width, height)

img = cv2.resize(img, dim, interpolation=cv2.INTER_AREA)
cv2.imwrite("HK.1.webp", img, [cv2.IMWRITE_WEBP_QUALITY, 95])