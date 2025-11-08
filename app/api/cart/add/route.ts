// app/api/cart/add/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { userId, product } = await req.json();

  // find or create a cart for user (guest carts can use a temp ID)
  let cart = await prisma.cart.findFirst({ where: { userId } });

  if (!cart) {
    cart = await prisma.cart.create({ data: { userId } });
  }

  // check if product already exists in cart
  const existingItem = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId: product.id },
  });

  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: product.id,
        name: product.name,
        price: product.price,
      },
    });
  }

  return NextResponse.json({ success: true });
}
