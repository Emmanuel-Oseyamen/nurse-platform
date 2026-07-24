import { Injectable, ForbiddenException } from "@nestjs/common";

import { PrismaService } from "../database/prisma.service";

import { CreateContentDto } from "./dto/create-content.dto";

@Injectable()
export class ContentService {
  constructor(private prisma: PrismaService) {}

  create(authorId: string, dto: CreateContentDto) {
    const slug = dto.title
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");

    return this.prisma.content.create({
      data: {
        ...dto,
        slug,
        authorId,
      },
    });
  }

  findAll() {
    return this.prisma.content.findMany({
      where: {
        published: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
      },
    });
  }

  featured() {
    return this.prisma.content.findFirst({
      where: {
        featured: true,
        published: true,
      },
      include: {
        author: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.content.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    });
  }

  async today() {
    return this.prisma.content.findFirst({
      where: {
        published: true,
        type: "HEALTH_TIP",
      },
      include: {
        author: true,
        likes: true,
        comments: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async like(contentId: string, userId: string) {
    const existing =
      await this.prisma.contentLike.findUnique({
        where: {
          contentId_userId: {
            contentId,
            userId,
          },
        },
      });

    if (existing) {
      await this.prisma.contentLike.delete({
        where: {
          contentId_userId: {
            contentId,
            userId,
          },
        },
      });

      return { liked: false };
    }

    await this.prisma.contentLike.create({
      data: {
        contentId,
        userId,
      },
    });

    return { liked: true };
  }

  async comment(
    contentId: string,
    userId: string,
    content: string,
  ) {
    return this.prisma.contentComment.create({
      data: {
        contentId,
        userId,
        content,
      },
      include: {
        user: true,
      },
    });
  }

  async mine(authorId: string) {
    return this.prisma.content.findMany({
      where: {
        authorId,
      },
      include: {
        likes: true,
        comments: true,
        bookmarks: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async delete(id: string, authorId: string) {
    const article = await this.prisma.content.findUnique({
      where: { id },
    });

    if (!article || article.authorId !== authorId) {
      throw new ForbiddenException();
    }

    return this.prisma.content.delete({
      where: { id },
    });
  }
}