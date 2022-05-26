using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ManageYourSelf.Models
{
    public partial class _8719_manageyourselfContext : DbContext
    {
        public _8719_manageyourselfContext()
        {
        }

        public _8719_manageyourselfContext(DbContextOptions<_8719_manageyourselfContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AspNetRole> AspNetRoles { get; set; } = null!;
        public virtual DbSet<AspNetRoleClaim> AspNetRoleClaims { get; set; } = null!;
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; } = null!;
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; } = null!;
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; } = null!;
        public virtual DbSet<AspNetUserToken> AspNetUserTokens { get; set; } = null!;
        public virtual DbSet<Bicycle> Bicycles { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Course> Courses { get; set; } = null!;
        public virtual DbSet<CourseTiming> CourseTimings { get; set; } = null!;
        public virtual DbSet<Duty> Duties { get; set; } = null!;
        public virtual DbSet<EnglishWord> EnglishWords { get; set; } = null!;
        public virtual DbSet<EventDate> EventDates { get; set; } = null!;
        public virtual DbSet<ExampleWord> ExampleWords { get; set; } = null!;
        public virtual DbSet<LogError> LogErrors { get; set; } = null!;
        public virtual DbSet<MasterData> MasterDatas { get; set; } = null!;
        public virtual DbSet<Menu> Menus { get; set; } = null!;
        public virtual DbSet<MenuRole> MenuRoles { get; set; } = null!;
        public virtual DbSet<PhoneBook> PhoneBooks { get; set; } = null!;
        public virtual DbSet<Planning> Plannings { get; set; } = null!;
        public virtual DbSet<RepeatTask> RepeatTasks { get; set; } = null!;
        public virtual DbSet<RepeatTaskDetail> RepeatTaskDetails { get; set; } = null!;
        public virtual DbSet<Sport> Sports { get; set; } = null!;
        public virtual DbSet<SubMenu> SubMenus { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=185.88.152.127,1430;Initial Catalog=8719_manageyourself;Integrated Security=false;User ID=8719_fe;Password=Fe_23565");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("8719_fe");

            modelBuilder.Entity<AspNetRole>(entity =>
            {
                entity.HasIndex(e => e.NormalizedName, "RoleNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedName] IS NOT NULL)");

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetRoleClaim>(entity =>
            {
                entity.HasIndex(e => e.RoleId, "IX_AspNetRoleClaims_RoleId");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetUser>(entity =>
            {
                entity.HasIndex(e => e.NormalizedEmail, "EmailIndex");

                entity.HasIndex(e => e.UserName, "IX_AspNetUsers_UserName")
                    .IsUnique()
                    .HasFilter("([UserName] IS NOT NULL)");

                entity.HasIndex(e => e.NormalizedUserName, "UserNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedUserName] IS NOT NULL)");

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);

                entity.HasMany(d => d.Roles)
                    .WithMany(p => p.Users)
                    .UsingEntity<Dictionary<string, object>>(
                        "AspNetUserRole",
                        l => l.HasOne<AspNetRole>().WithMany().HasForeignKey("RoleId"),
                        r => r.HasOne<AspNetUser>().WithMany().HasForeignKey("UserId"),
                        j =>
                        {
                            j.HasKey("UserId", "RoleId");

                            j.ToTable("AspNetUserRoles");

                            j.HasIndex(new[] { "RoleId" }, "IX_AspNetUserRoles_RoleId");
                        });
            });

            modelBuilder.Entity<AspNetUserClaim>(entity =>
            {
                entity.HasIndex(e => e.UserId, "IX_AspNetUserClaims_UserId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserLogin>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

                entity.HasIndex(e => e.UserId, "IX_AspNetUserLogins_UserId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserToken>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserTokens)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<Bicycle>(entity =>
            {
                entity.HasIndex(e => e.UserId, "IX_Bicycles_UserId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Bicycles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasIndex(e => e.Key, "IX_Categories_Key")
                    .IsUnique()
                    .HasFilter("([Key] IS NOT NULL)");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.HasIndex(e => e.UserId, "IX_Courses_UserId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.EndDate).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.Property(e => e.StartDate).HasMaxLength(8);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Courses)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<CourseTiming>(entity =>
            {
                entity.HasIndex(e => e.CourseId, "IX_CourseTimings_CourseId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.Date).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.CourseTimings)
                    .HasForeignKey(d => d.CourseId);
            });

            modelBuilder.Entity<Duty>(entity =>
            {
                entity.HasIndex(e => e.MasterDataId, "IX_Duties_MasterDataId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.IsExecuted)
                    .IsRequired()
                    .HasDefaultValueSql("(CONVERT([bit],(0)))");

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.MasterData)
                    .WithMany(p => p.Duties)
                    .HasForeignKey(d => d.MasterDataId);
            });

            modelBuilder.Entity<EnglishWord>(entity =>
            {
                entity.ToTable("englishWords");

                entity.HasIndex(e => new { e.English, e.LastModifiedBy }, "IX_englishWords_English_LastModifiedBy")
                    .IsUnique()
                    .HasFilter("([English] IS NOT NULL AND [LastModifiedBy] IS NOT NULL)");

                entity.HasIndex(e => e.UserId, "IX_englishWords_UserId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.EnglishWords)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<EventDate>(entity =>
            {
                entity.ToTable("eventDates");

                entity.HasIndex(e => e.UserId, "IX_eventDates_UserId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.Date)
                    .HasMaxLength(8)
                    .HasDefaultValueSql("(N'')");

                entity.Property(e => e.IsRepeatEveryMonth)
                    .IsRequired()
                    .HasDefaultValueSql("(CONVERT([bit],(0)))");

                entity.Property(e => e.IsRepeatEveryYear)
                    .IsRequired()
                    .HasDefaultValueSql("(CONVERT([bit],(0)))");

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.EventDates)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<ExampleWord>(entity =>
            {
                entity.HasIndex(e => e.EnglishWordId, "IX_ExampleWords_EnglishWordId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.EnglishWord)
                    .WithMany(p => p.ExampleWords)
                    .HasForeignKey(d => d.EnglishWordId);
            });

            modelBuilder.Entity<LogError>(entity =>
            {
                entity.ToTable("logErrors");

                entity.Property(e => e.Date).HasDefaultValueSql("('0001-01-01T00:00:00.0000000')");
            });

            modelBuilder.Entity<MasterData>(entity =>
            {
                entity.HasIndex(e => e.CategoryId, "IX_MasterDatas_CategoryId");

                entity.HasIndex(e => new { e.UserId, e.CategoryId }, "IX_MasterDatas_UserId_CategoryId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.MasterData)
                    .HasForeignKey(d => d.CategoryId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.MasterData)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<Menu>(entity =>
            {
                entity.Property(e => e.Action).HasMaxLength(30);

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.Property(e => e.Url).HasMaxLength(30);
            });

            modelBuilder.Entity<MenuRole>(entity =>
            {
                entity.HasIndex(e => e.MenuId, "IX_MenuRoles_MenuId");

                entity.HasIndex(e => e.RoleId, "IX_MenuRoles_RoleId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.Menu)
                    .WithMany(p => p.MenuRoles)
                    .HasForeignKey(d => d.MenuId);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.MenuRoles)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<PhoneBook>(entity =>
            {
                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);
            });

            modelBuilder.Entity<Planning>(entity =>
            {
                entity.HasIndex(e => e.CourseId, "IX_Plannings_CourseId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.Date).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Plannings)
                    .HasForeignKey(d => d.CourseId);
            });

            modelBuilder.Entity<RepeatTask>(entity =>
            {
                entity.ToTable("repeatTasks");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);
            });

            modelBuilder.Entity<RepeatTaskDetail>(entity =>
            {
                entity.HasIndex(e => new { e.RepeatTaskId, e.Created }, "IX_RepeatTaskDetails_RepeatTaskId_Created")
                    .IsUnique()
                    .HasFilter("([Created] IS NOT NULL)");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.RepeatTask)
                    .WithMany(p => p.RepeatTaskDetails)
                    .HasForeignKey(d => d.RepeatTaskId);
            });

            modelBuilder.Entity<Sport>(entity =>
            {
                entity.HasIndex(e => e.MasterDataId, "IX_Sports_MasterDataId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.MasterData)
                    .WithMany(p => p.Sports)
                    .HasForeignKey(d => d.MasterDataId);
            });

            modelBuilder.Entity<SubMenu>(entity =>
            {
                entity.ToTable("SubMenu");

                entity.HasIndex(e => e.MenuId, "IX_SubMenu_MenuId");

                entity.Property(e => e.CreatedShamsy).HasMaxLength(8);

                entity.Property(e => e.LastModifiedShamsy).HasMaxLength(8);

                entity.HasOne(d => d.Menu)
                    .WithMany(p => p.SubMenus)
                    .HasForeignKey(d => d.MenuId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
