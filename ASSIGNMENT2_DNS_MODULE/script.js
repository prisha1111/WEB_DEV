document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    fetch("navbar.html")
      .then(res => res.text())
      .then(data => {
        navbarPlaceholder.innerHTML = data;
      });
  }

  const form = document.getElementById("blogForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("title").value.trim();
      const image = document.getElementById("image").value.trim();
      const description = document.getElementById("description").value.trim();
      const category = document.getElementById("category").value;
      const publisher = document.getElementById("publisher").value.trim();
      const editIndex = parseInt(document.getElementById("editIndex").value);

      const newBlog = {
        title,
        image,
        description,
        category,
        publisher,
        createdAt: new Date().toISOString(),
      };

      let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

      if (editIndex === -1) {
        blogs.unshift(newBlog);
      } else {
        blogs[editIndex] = newBlog;
      }

      localStorage.setItem("blogs", JSON.stringify(blogs));
      form.reset();
      document.getElementById("editIndex").value = -1;
      alert("Blog submitted successfully!");
    });
  }

  const blogContainer = document.getElementById("blogContainer");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortOrder = document.getElementById("sortOrder");

  if (blogContainer) {
    const renderBlogs = () => {
      const searchText = searchInput?.value.toLowerCase() || "";
      const selectedCategory = categoryFilter?.value || "";
      const sort = sortOrder?.value || "newest";

      let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

      blogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchText)
      );

      if (selectedCategory) {
        blogs = blogs.filter(blog => blog.category === selectedCategory);
      }

      blogs.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return sort === "newest" ? dateB - dateA : dateA - dateB;
      });

      blogContainer.innerHTML = "";

      if (blogs.length === 0) {
        blogContainer.innerHTML = "<p>No blogs found.</p>";
        return;
      }

      blogs.forEach((blog, index) => {
        const blogCard = document.createElement("div");
        blogCard.className = "blog-card";

        blogCard.innerHTML = `
          <h2>${blog.title}</h2>
          <img src="${blog.image}" alt="Blog Image">
          <p>${blog.description}</p>
          <h4>Category: ${blog.category}</h4>
          <h5>Published by: ${blog.publisher}</h5>
          <button onclick="editBlog(${index})">Edit</button>
          <button onclick="deleteBlog(${index})">Delete</button>
        `;

        blogContainer.appendChild(blogCard);
      });
    };

    searchInput?.addEventListener("input", renderBlogs);
    categoryFilter?.addEventListener("change", renderBlogs);
    sortOrder?.addEventListener("change", renderBlogs);
    renderBlogs();

    window.editBlog = function (index) {
      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const blog = blogs[index];
      if (!blog) return;

      sessionStorage.setItem("editBlogIndex", index);
      sessionStorage.setItem("editBlogData", JSON.stringify(blog));
      window.location.href = "admin.html";
    };

    window.deleteBlog = function (index) {
      let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      if (confirm("Are you sure you want to delete this blog?")) {
        blogs.splice(index, 1);
        localStorage.setItem("blogs", JSON.stringify(blogs));
        renderBlogs();
      }
    };
  }

  const editIndex = sessionStorage.getItem("editBlogIndex");
  const editBlogData = sessionStorage.getItem("editBlogData");
  if (form && editIndex && editBlogData) {
    const blog = JSON.parse(editBlogData);
    document.getElementById("title").value = blog.title;
    document.getElementById("image").value = blog.image;
    document.getElementById("description").value = blog.description;
    document.getElementById("category").value = blog.category;
    document.getElementById("publisher").value = blog.publisher;
    document.getElementById("editIndex").value = editIndex;

    sessionStorage.removeItem("editBlogIndex");
    sessionStorage.removeItem("editBlogData");
  }
});
